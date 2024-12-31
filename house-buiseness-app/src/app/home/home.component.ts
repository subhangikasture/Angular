import { Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [ HousingLocationComponent, CommonModule],
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
    <section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList : HousingLocation[]=[];
  housingService: HousingService = inject(HousingService);
  constructor()
  {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }  
}
