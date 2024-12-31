import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
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
  constructor() { }
  getAllHousingLocations(): HousingLocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined{
    return this.housingLocationList.find((housingLocation)=>housingLocation.id === id)
  }

  submitApplication(firstName: string, lastName: string, email: string)
  {
    console.log(`House application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }
}
