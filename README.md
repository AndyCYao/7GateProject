# AeroSmart Demo - Baggage Tracker using Hyperledger Fabric

Baggage tracking network for airport and passenger

Based on the tutorial found here

https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial


Modelling Language

https://hyperledger.github.io/composer/latest/reference/cto_language.html


## Run Step
1. make sure your hyperledger fabric is installed, then run 
    `./fabricUtil.sh start` to start it.

2. Install the business network with

    `composer network install --card PeerAdmin@hlfv1 --archiveFile baggage-network@0.0.5.bna`

3. start the network , and create business network card for roles

    `composer network start --networkName baggage-network --networkVersion 0.0.5 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`

    then import the card with 

    `composer card import --file networkadmin.card`

4. (optional) run hyperledger composer playground with 
    `docker run --name composer-playground --publish 8080:8080 hyperledger/composer-playground`
    open up your browser at localhost:8080, once the composer playground is loaded, select `Deploy a new business network` -> `Drop here or upload or browse` to import the baggage-network.bna.

6. can create a composer rest server with 
    `composer-rest-server`
    
    or if you know the settings already just `composer-rest-server -c admin@baggage-network -n never` 

    card name - `admin@baggage-network`
    
    never use name space

    No to generate secure API

    YES to enable event publication

    NO to enable TLS security
    
    then the rest api should be listening on http://localhost:3000

7. Create an angular app template with (OPTIONAL)

    `yo hyperledger-composer:angular` , then navigate to the angular app folder, and `npm start`

8. Miscellaenous 

    when you make a change in the model or logic schema, to deploy it, you need to follow the following 

    * increment the package json version in the format of 0.0.x
        
    * `composer archive create -t dir -n .` 

    * install the new bna file composer network install -a NETWORK-FILENAME.bna -c peeradmin@hlfv1

   * upgrade the business network
    `composer network upgrade -c peeradmin@hlfv1 -n NETWORK-NAME -V NETWORK-VERSION`


    create a card with 
        `composer card create --file BER_aID.card --businessNetworkName baggage-network --connectionProfileFile connection.json --user BER --enrollSecret supersecret`


## Network components

The Hyperledger Fabric network is made up of several components:

- A single peer node for Org1, named peer0.org1.example.com.
        The request port is 7051.
        The event hub port is 7053.
 
- A single Certificate Authority (CA) for Org1, named ca.org1.example.com.
        The CA port is 7054.
    
- A single orderer node, named orderer.example.com.
        The orderer port is 7050.



## Other useful fabric commands
`composer network deploy -s locationOf.bna -i Identity -s SecretKey`

## To Do List
Add unit testing with [cucumber](https://github.com/cucumber/cucumber-js) for fabric composer
