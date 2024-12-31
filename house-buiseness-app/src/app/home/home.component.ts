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
      <input type="text" placeholder="Filter by city" #filter >
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation_]="housingLocation"></app-housing-location>
    </section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList : HousingLocation[]=[];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: any;
  constructor()
  {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  } 
  filterResults(text: string)
  {
    if (!text) {
   this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation && housingLocation.city && housingLocation.city.toLowerCase().includes(text.toLowerCase()),
    );

  } 
}

