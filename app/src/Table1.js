import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import Client from './Client';

class Table1 extends Component {
  render() {

    function onSelectRow(row, isSelected, e) {
        if (isSelected) {

        var now = new Date()
        var badgeID = `${row['badgeName'].toLowerCase()}`

        const validationData =  {
                "$class": "org.acme.openbadge.validateBadge",
                "badge": `org.acme.openbadge.Badge#${row['badgeName'].toLowerCase()}`,
                "issuer": `org.acme.openbadge.Teacher#${row['issuerName'].toLowerCase()}`,
                "validator": `org.acme.openbadge.Validator#${row['validatorName'].toLowerCase()}`,
                "owner": `org.acme.openbadge.Student#${row['ownerName'].toLowerCase()}`,
                "timestamp": `${now.toISOString()}`
        }

        Client.create('validateBadge', validationData)
        alert("Selected Badge Validated!")
        window.location.reload()
      }
    }
 
    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      unselectable: [2],
      selected: [1],
      onSelect: onSelectRow,
      bgColor: 'green'
    };

    return (
      <div>
        <BootstrapTable data={this.props.data} selectRow={selectRowProp}>
          <TableHeaderColumn isKey dataField='badgeName'>
            Badge Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='boolValidate'>
            Validated
          </TableHeaderColumn>
          <TableHeaderColumn dataField='issuerName'>
            Issuer
          </TableHeaderColumn>
          <TableHeaderColumn dataField='validatorName'>
            Validator
          </TableHeaderColumn>
          <TableHeaderColumn dataField='ownerName'>
            Owner
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;