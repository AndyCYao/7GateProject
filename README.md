# AeroSmart Demo

Baggage Tracker using Hyperledger Fabric

In our demo video below, the iOS app is the baggage handler at an airport, it scans the baggage tag (QR code) of the luggage, and the location of the luggage is posted to the fabric network using the RESTful server from fabric composer

Similarly, passengers use a react web-app to retrieve the location of their baggages.

[[](http://img.youtube.com/vi/Fl1HGYDcRSw/0.jpg)](http://www.youtube.com/watch?v=Fl1HGYDcRSw "Team Aerosmart - Aviation Blockchain Challege")

---

### Why use blockchain?
Blockchain is a distributed, append only record system. Each participant in the network will share the same record system. __So everyone has a single version of truth__. no more coordinating data from multiple silo-ed systems.

The International Air Transport Authority (IATA) has mandated through [regulation 753](https://www.iata.org/whatwedo/ops-infra/baggage/Pages/baggage-tracking.aspx) that airlines need to have baggage tracking by Jun 2018. The four key area being 

1. Passenger handover to airline
2. Loading to the aircraft
3. Deliver to the transfer area
4. Return to the passenger

As well, airlines need to share the information with their interline journey partners. 

We believe a blockchain based implementation can solve the problems presented in IATA R753.

### How does transactions get verify
When a baggage is scanned at an airport, the airport will sign the transaction and send the transaction to an endorser. The endorser checks if the signature is correct and allows the airport to broadcast the transaction to the orderer. The orderer delivers the transaction to its peers. 

## Run Step
1. make sure your hyperledger fabric is installed, then run 
    `./fabricUtil.sh start` to start it. (and `./fabricUtil.sh stop` to stop) This launches a peer node, a certifying authority node, and an orderer node in separate docker containers.

2. Install the business network with

    `composer network install --card PeerAdmin@hlfv1 --archiveFile baggage-network@0.0.6.bna`

3. start the network , and create business network card for roles

    `composer network start --networkName baggage-network --networkVersion 0.0.6 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`

    then import the card with 

    `composer card import --file networkadmin.card`

4. can create a composer rest server with 
    `composer-rest-server`
    
    or if you know the settings already just `composer-rest-server -c admin@baggage-network -n never` 

    card name - `admin@baggage-network`
    
    never use name space

    No to generate secure API

    YES to enable event publication

    NO to enable TLS security
    
    then the rest api should be listening on http://localhost:3000

5. (OPTIONAL) run hyperledger composer playground with 
    `docker run --name composer-playground --publish 8080:8080 hyperledger/composer-playground`
    open up your browser at localhost:8080, once the composer playground is loaded, select `Deploy a new business network` -> `Drop here or upload or browse` to import the baggage-network.bna.


6. (OPTIONAL) Create an angular app template with

    `yo hyperledger-composer:angular` , then navigate to the angular app folder, and `npm start`

7. Miscellaenous 

    when you make a change in the model or logic schema, to deploy it, you need to follow the following 

    * increment the package json version in the format of 0.0.x
        
    * `composer archive create -t dir -n .` 

    * install the new bna file composer network install -a NETWORK-FILENAME.bna -c peeradmin@hlfv1

   * upgrade the business network
    `composer network upgrade -c peeradmin@hlfv1 -n NETWORK-NAME -V NETWORK-VERSION`

## Network components

The Hyperledger composer network is made up of several components:

- A single peer node for Org1, named peer0.org1.example.com.
        The request port is 7051.
        The event hub port is 7053.
 
- A single Certificate Authority (CA) for Org1, named ca.org1.example.com.
        The CA port is 7054.
    
- A single orderer node, named orderer.example.com.
        The orderer port is 7050.

## Sources
Based on the tutorial found here
https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial

Modelling Language
https://hyperledger.github.io/composer/latest/reference/cto_language.html


## Other useful fabric commands
`composer network deploy -s locationOf.bna -i Identity -s SecretKey`

create a card with 
        `composer card create --file BER_aID.card --businessNetworkName baggage-network --connectionProfileFile connection.json --user BER --enrollSecret supersecret`

## To Do List
Add unit testing with [cucumber](https://github.com/cucumber/cucumber-js) for fabric composer
