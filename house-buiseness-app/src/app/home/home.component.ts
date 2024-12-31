import { Component, NgModule } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, HousingLocationComponent],
  template:`
    <section>
    <form>
        <input type="text" placeholder="Filter by city"/>
        <button class="primary" type="button">Search</button>
    </form>
    </section>
    <section class="content">
    <div class="grid">
        <app-housing-location *ngFor="let location of housingLocationList" [housingLocation_]="location"></app-housing-location>
    </div>
    </section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: HousingLocation[] = [
    {
    id: 99991,
    name: "Arya stark",
    city: "North",
    state: "Karnataka",
    wifi: true,
    availableUnits: 8,
    laundry: true,
    photo: `${this.baseUrl}/example-house.jpg`
   },
   {
    id: 99992,
    name: "Sansa stark",
    city: "North",
    state: "Karnataka",
    wifi: true,
    availableUnits: 8,
    laundry: true,
    photo: `${this.baseUrl}/example-house.jpg`
   },
   {
    id: 99993,
    name: "Jon snow",
    city: "Winterfell",
    state: "Karnataka",
    wifi: true,
    availableUnits: 8,
    laundry: true,
    photo: `${this.baseUrl}/example-house.jpg`
   },
   {
    id: 99994,
    name: "Drangon mother",
    city: "7 kingdom",
    state: "Karnataka",
    wifi: true,
    availableUnits: 8,
    laundry: true,
    photo: `${this.baseUrl}/example-house.jpg`
   },
];
}
