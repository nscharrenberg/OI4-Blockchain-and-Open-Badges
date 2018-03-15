# Hyperledger Fabric & Composer Protype
<h1>Installation Guide 🤓 </h1>

Tested with OS X 10.11.6 (15.03.2018 by Kasper🇫🇮)

<h3>1. Setting up necessaries</h3>

1.1  [Install Docker CE](https://docs.docker.com/install/)

<strong>NOTE - All following commands are done via bash (git cli and npm needed). </strong>

1.2 Install Hyperledger Composer:

```
npm install -g composer-cli
```

1.3 Install REST server:
```
npm install -g composer-rest-server
```

1.4 Install some code generators:
```
npm install -g generator-hyperledger-composer
npm install -g yo
```

<h3>2. Setup local Hyperledger Fabric:</h3>
2.1 Make dir for Fabric-tools (you will ALWAYS start network from this folder) and chance bash location to it:
```
mkdir ~/fabric-tools && cd ~/fabric-tools
```

2.2 Install fabric to this folder:
```
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip unzip fabric-dev-servers.zip
```

2.3 Download Fabric:
```
./downloadFabric.sh
```

2.4 Run Fabric:
```
./startFabric.sh
```

2.4.1 Create peerCard:
```
./createPeerAdminCard.sh
```

<h3>3. Setup project</h3>
3.1 Open new terminal and clone this git repo where you want
3.2 Chance branch:
```
git checkout fabric-protype
```
(yeah I made a typo here..)

3.3 cd yourself to /open-badge

<h3>4. Deploy Composer project</h3>
4.1 create network:
```
composer archive create -t dir -n .
```

4.2 Install Composer runtime:
```
composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName open-badge
```

4.2 Deploy network
```
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile open-badge@0.0.1.bna --file networkadmin.card
```

4.3 Import network card:
```
composer card import --file networkadmin.card
```

4.4 Run REST API:
```
composer-rest-server
```

	-> Type name: admin@open-badge
	-> Choose "never use namespaces"
	-> Choose N
	-> Choose Y
	-> Choose N

<h3>5. Deploy webpage</h3>
5.1 open new terminal and cd yourself to <gitrepo>/app
5.2 Install node packages:
```
npm install
```
5.3 Run App:
```
npm start
```

<h3>💥 DONE 💥</h3>



















