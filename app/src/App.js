import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Client from './Client';
import Table1 from './Table1';

var data = [];
console.log(data)

class App extends Component {

    state = {
        students: [],
        teachers: [],
        validators: [],
        badges: []
    }

    componentWillMount = () => {
        this.getStudents()
        this.getTeachers()
        this.getValidators()
        this.getBadges()
    }

    getAllParticipants = () => {
      this.getTeachers()
      this.getStudents()
      this.getValidators()
    }

      getStudents = () => {
          Client.search('Student')
          .then(data => {
              this.setState({
                  students: data
              })
          })
      }

      getTeachers = () => {
          Client.search('Teacher')
          .then(data => {
              this.setState({
                  teachers: data
              })
          })
      }

      getValidators = () => {
          Client.search('Validator')
          .then(data => {
              this.setState({
                  validators: data
              })
          })
      }

      getBadges = () => {
          Client.search('Badge')
          .then(data => {
              this.setState({
                  badges: data
              })
              for( let i = 0; i < this.state.badges.length; i++ ){
                  let student = this.state.badges[i].owner.split('#')[1]
                  let validator = this.state.badges[i].validator.split('#')[1]
                  let teacher = this.state.badges[i].issuer.split('#')[1]
                  Client.search(`Student/${student}`)
                      .then(data => {
                          let badges = this.state.badges
                          badges[i].owner = data.name
                          this.setState({
                              badges
                          })
                      })
                  Client.search(`Validator/${validator}`)
                      .then(data => {
                          let badges = this.state.badges
                          badges[i].validator = data.name
                          this.setState({
                              badges
                          })
                      })
                  Client.search(`Teacher/${teacher}`)
                      .then(data => {
                          let badges = this.state.badges
                          badges[i].issuer = data.name
                          this.setState({
                              badges
                          })
                      })

              }

              this.populateTable()
          })
      }

    populateTable = () => {
        for( let i = 0; i < this.state.badges.length; i++ ){
          data[i] = {
            badgeName: this.state.badges[i].name, 
            boolValidate: this.state.badges[i].validated.toString(),
            issuerName: this.state.badges[i].issuer.split('#')[1],
            validatorName: this.state.badges[i].validator.split('#')[1],
            ownerName: this.state.badges[i].owner.split('#')[1]
          }
        }
    }

    handleParticipantName = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    setParticipateRole = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submitParticipate = () => {
        const network = "org.acme.openbadge." 
        const role = this.state.role.toString()
        const classDef = network + role

        const data = {
            "$class": classDef,
            "id": this.state.name.toLowerCase(),
            "name": this.state.name
        }

        console.log(data)

        Client.create(role, data)
        .then(() => {
            this.getAllParticipants()
        })
    }

    handleBadgename = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(name, value)
    }

    submitBadge = () => {
        const data =  {
            "$class": "org.acme.openbadge.Badge",
            "badgeId": this.state.badgeName.toLowerCase(),
            "name": this.state.badgeName,
            "validated": false,
            "issued": true,
            "issuer": `org.acme.openbadge.Teacher#${this.state.badgeIssuer}`,
            "validator": `org.acme.openbadge.Validator#${this.state.badgeValidator}`,
            "owner": `org.acme.openbadge.Student#${this.state.badgeOwner}`
        }

        console.log(data)

        Client.create('Badge', data)
        .then(() => {
            this.getBadges()
            this.populateTable()

        })
    }

  render() {

    return (
      <div className="App">
                <div className="addNewParticipate" style={{'margin': '30px', 'textAlign': 'left'}}>
                    <h2>Add new Participate</h2>
                    <label style={{'margin': '15px'}}>Name:</label>
                    <input onChange={this.handleParticipantName} type='text' name='name' />
                    <div style={{'marginTop': '10px'}} >
                      <input type='radio' value="Teacher" name='role' style={{'margin': '15px'}} onChange={this.setParticipateRole} /> Teacher
                      <input type='radio' value="Validator" name='role' style={{'margin': '15px'}} onChange={this.setParticipateRole} /> Validator
                      <input type='radio' value="Student" name='role' style={{'margin': '15px'}} onChange={this.setParticipateRole} /> Student
                    </div>
                    <button style={{'margin': '15px'}} onClick={this.submitParticipate}>Submit New Participate</button>
                </div>
                <hr></hr>
                <div className="addNewBadge" style={{'margin': '30px', 'textAlign': 'left'}}>
                  <h2>Add new Badge</h2>
                  <p>For ID, you can only use ID's created (see bellow)</p>
                  <label style={{'margin': '15px'}}>Badge Name:</label>
                  <input onChange={this.handleBadgename} type='text' name='badgeName' />
                  <label style={{'margin': '15px'}}>Teacher ID:</label>
                  <input onChange={this.handleBadgename} type='text' name='badgeIssuer' />
                  <label style={{'margin': '15px'}}>Validator ID:</label>
                  <input onChange={this.handleBadgename} type='text' name='badgeValidator' />
                  <label style={{'margin': '15px'}}>Student ID:</label>
                  <input onChange={this.handleBadgename} type='text' name='badgeOwner' />
                  <button style={{'margin': '15px'}} onClick={this.submitBadge}>Submit New Badge</button>
                </div>
                <hr></hr>
                <div className="explorer" style={{'margin': '30px', 'textAlign': 'left'}}>
                  <h2>For Validator</h2>
                  <div className="issuedBadges">
                    <h3>Issued Badges</h3>
                    <p>You can validate badge by pressing selection</p>
                    <p className="Table-header"></p>
                    <Table1 data={data}/>
                  </div>
                </div>
                <hr></hr>
                <div className="lists" style={{margin: '20px', display: 'flex', justifyContent: 'space-around'}}>
                        <div>
                            <h3>Students</h3> 
                            {this.state.students.map((p, i) => (
                                <div
                                    style={{border: '1px solid black', padding: '10px',}} 
                                    key={i}>
                                    <p>ID: {p.id}</p>
                                    <p>Name: {p.name}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Teachers</h3> 
                            {this.state.teachers.map((p, i) => (
                                <div
                                    style={{border: '1px solid black', padding: '10px'}} 
                                    key={i}>
                                    <p>ID: {p.id}</p>
                                    <p>Name: {p.name}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Validators</h3> 
                            {this.state.validators.map((p, i) => (
                                <div
                                    style={{border: '1px solid black', padding: '10px'}} 
                                    key={i}>
                                    <p>ID: {p.id}</p>
                                    <p>Name: {p.name}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Badges</h3> 
                            {this.state.badges.map((p, i) => (
                                <div
                                    style={{border: '1px solid black', padding: '10px'}} 
                                    key={i}>
                                    <p>ID: {p.badgeId}</p>
                                    <p>Name: {p.name}</p>
                                    <p>Validated: {p.validated.toString()}</p>
                                    <p>Issued: {p.issued.toString()}</p>
                                    <p>Issuer: {p.issuer}</p>
                                    <p>Validator: {p.validator}</p>
                                    <p>Owner: {p.owner}</p>
                                </div>
                            ))}
                        </div>
                </div>
      </div>

    );
  }
}

export default App;
