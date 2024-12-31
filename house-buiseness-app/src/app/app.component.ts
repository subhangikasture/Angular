import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { HousingLocationComponent } from "./housing-location/housing-location.component";
import { HousingLocation } from './housing-location';
@Component({
  selector: 'app-root',
  imports: [HomeComponent, HousingLocationComponent],
  template:`
  <main>
  <h1> Hello world!! </h1>
  <section class="content">
    <app-home></app-home>
  </section>
  <section class="content">
    <app-housing-location [housingLocation_]="housingLocation_appComponnet"></app-housing-location>
  </section>
</main>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
  housingLocation_appComponnet: HousingLocation=
  {
    name:"Kartik",
    id:123,
    city: "Kalkatta"
  }
}
