# Hyperledger Fabric & Composer Protype
<h1>Installation Guide 🤓 </h1>

Tested with OS X 10.11.6 (15.03.2018 by Kasper🇫🇮)

<h3>1. Setting up necessaries</h3>

1.1  [Install Docker CE](https://docs.docker.com/install/)

<strong>NOTE - All following commands are done via bash (git cli and npm needed). </strong>

1.2 Install Hyperledger Composer:
`<addr>`npm install -g composer-cli

1.3 Install REST server:
`<addr>`npm install -g composer-rest-server

1.4 Install some code generators:
`<addr>`npm install -g generator-hyperledger-composer
`<addr>`npm install -g yo

<h3>2. Setup local Hyperledger Fabric:</h3>
2.1 Make dir for Fabric-tools (you will ALWAYS start network from this folder) and chance bash location to it:
`<addr>`mkdir ~/fabric-tools && cd ~/fabric-tools

2.2 Install fabric to this folder:
`<addr>`curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip unzip fabric-dev-servers.zip

2.3 Download Fabric:
`<addr>`./downloadFabric.sh

2.4 Run Fabric:
`<addr>`./startFabric.sh

2.4.1 Create peerCard:
`<addr>`./createPeerAdminCard.sh

<h3>3. Setup project</h3>
3.1 Open new terminal and clone this git repo where you want
3.2 Chance branch:
`<addr>`git checkout fabric-protype
(yeah I made a typo here..)

3.3 cd yourself to /open-badge

<h3>4. Deploy Composer project</h3>
4.1 create network:
`<addr>`composer archive create -t dir -n .

4.2 Install Composer runtime:
`<addr>`composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName open-badge

4.2 Deploy network
`<addr>`composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile open-badge@0.0.1.bna --file networkadmin.card

4.3 Import network card:
`<addr>`composer card import --file networkadmin.card

4.4 Run REST API:
`<addr>`composer-rest-server

`<addr>`-> Type name: admin@open-badge
`<addr>`-> Choose "never use namespaces"
`<addr>`-> Choose N
`<addr>`-> Choose Y
`<addr>`-> Choose N

<h3>5. Deploy webpage</h3>
5.1 open new terminal and cd yourself to <gitrepo>/app
5.2 Install node packages:
`<addr>`npm install
5.3 Run App:
`<addr>`npm start

<h3>💥 DONE 💥</h3>



















