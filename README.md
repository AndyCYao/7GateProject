# Baggage Tracker Hyperledge

Baggage tracking network for airport and passenger

Based on the tutorial found here

https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial


Modelling Language

https://hyperledger.github.io/composer/latest/reference/cto_language.html


## Run Step
1. when you make a change in the model or logic schema you can update the business network archive `bna` file with
`composer archive create --sourceType dir --sourceName . -a baggage-network@Y.Y.Y.bna` where `Y.Y.Y` is the version number in `package.json`
2. Install the business network with

    composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna

3. start the network with 

    composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

3. run hyperledger composer playground with 

    docker run --name composer-playground --publish 8080:8080 hyperledger/composer-playground

4. open up your browser at localhost:8080, once the composer playground is loaded, select `Deploy a new business network` -> `Drop here or upload or browse` to import the baggage-network.bna.