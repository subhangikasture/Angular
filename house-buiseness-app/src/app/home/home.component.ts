import { Component } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housing-location';
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  template:`
  <section>
  <form>
      <input type="text" placeholder="Filter by city"/>
      <button class="primary" type="button">Search</button>
  </form>
</section>
<section class="content">
        <app-housing-location></app-housing-location>
      </section>

`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocation = {
    id: 99999,
    name: "Subhangi",
    city: "Bnaglore",
    state: "Karnataka",
    wifi: true,
    availableUnits: 8,
    laundry: true,
    photo: `${this.baseUrl}/example-house.jpg`
  };
}
