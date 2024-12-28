import { Component } from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component'

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  template:`<section>
  <form>
  <section class="content">
        <app-housing-location></app-housing-location>
      </section>
      <input type="text" placeholder="Filter by city"/>
      <button class="primary" type="button">Search</button>
    
  </form>
</section>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
