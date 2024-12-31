import { Component, Input} from '@angular/core';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-housing-location',
  imports: [],
  template:`
  <section class="listing">
  <img
    class="listing-photo"
    [src]="housingLocation_.photo"
    alt="Exterior photo of {{ housingLocation_.name }}"
    crossorigin
  />
  <h2 class="listing-heading">{{ housingLocation_.name }}</h2>
  <p class="listing-location">{{ housingLocation_.city }}, {{ housingLocation_.state }}</p>
</section>
`,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
@Input() housingLocation_!: HousingLocation;
}
