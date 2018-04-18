# Hyperledger Fabric & Composer Protype
<h1>Installation Guide 🤓 </h1>

Tested 18.04.2018 by Kasper🇫🇮
OS X 10.11.6. Composer Version 0.16.6
Ubuntu 16.04.4. Composer Version 0.19.0

<h3>1. Setting up necessaries</h3>

1.1  [Follow this instruction](https://hyperledger.github.io/composer/latest/installing/installing-prereqs)

<strong>NOTE - All following commands are done via bash. </strong>

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
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
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

3.2 Chance branch (yeah I made a typo on branch name here 🙈):
```
git checkout fabric-protype
```



3.3 cd yourself to /open-badge

<h3>4. Deploy Composer project</h3>

4.1 create network:
```
composer archive create -t dir -n .
```

4.2 IF Composer 0.16.6 ! Install Composer runtime:
```
composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName open-badge
```

4.2 IF Composer 0.19.0 ! Install Composer runtime:
```
composer network install --card PeerAdmin@hlfv1 --archiveFile open-badge@0.0.1.bna
```

4.3 IF Composer 0.16.6 ! Deploy network
```
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile open-badge@0.0.1.bna --file networkadmin.card
```

4.3 IF Composer 0.19.0 ! Deploy network
```
composer network start --networkName open-badge --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```

4.3 Import network card:
```
composer card import --file networkadmin.card
```

4.4 Run REST API:
```
composer-rest-server
```

<p>-> Type name: admin@open-badge</p>
<p>-> Choose "never use namespaces"</p>
<p>-> Choose N</p>
<p>-> Choose Y</p>
<p>-> Choose N</p>

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



















