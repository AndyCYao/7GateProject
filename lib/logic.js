/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */



/**
 * Sample transaction
 * @param {org.aerosmart.baggageTracker.ScannedBaggage} ScannedBaggage
 * @transaction
 */
async function ScannedBaggage(tx) {
    // Save the old value of the asset.
    const oldLocation = tx.baggage.location;

    // Update the asset with the new value.
    tx.baggage.location = tx.newLocation;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.aerosmart.baggageTracker.Baggage');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.baggage);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.aerosmart.baggageTracker', 'ScannedBaggageEvent');
    event.baggage = tx.baggage;
    // event.oldLocation = oldLocation;
    event.dateTime = tx.dateTime;
    event.newLocation = tx.newLocation;
    emit(event);
}

