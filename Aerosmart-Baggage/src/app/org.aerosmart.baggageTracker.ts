import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.aerosmart.baggageTracker{
   export class Airport extends Participant {
      airportId: string;
      location: string;
   }
   export class Passenger extends Participant {
      luggages: Luggage[];
      passengerId: string;
   }
   export class Luggage extends Asset {
      passenger: Passenger;
      luggageId: string;
      description: string;
      location: string;
   }
   export class ScannedLuggage extends Transaction {
      luggage: Luggage;
      newLocation: string;
      dateTime: Date;
   }
   export class ScannedLuggageEvent extends Event {
      luggage: Luggage;
      newLocation: string;
      dateTime: Date;
   }
// }
