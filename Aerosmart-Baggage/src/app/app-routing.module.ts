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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LuggageComponent } from './Luggage/Luggage.component';

import { AirportComponent } from './Airport/Airport.component';
import { PassengerComponent } from './Passenger/Passenger.component';

import { ScannedLuggageComponent } from './ScannedLuggage/ScannedLuggage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Luggage', component: LuggageComponent },
  { path: 'Airport', component: AirportComponent },
  { path: 'Passenger', component: PassengerComponent },
  { path: 'ScannedLuggage', component: ScannedLuggageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
