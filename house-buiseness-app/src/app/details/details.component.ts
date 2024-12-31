import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone : true,
  imports: [CommonModule],
  template: `
  <p>
      details works!! {{housingLocation?.id}}
  </p>
  <p>
    Name :{{housingLocation?.name}}
    City : {{housingLocation?.city}}
    State : {{housingLocation?.state}}
  </p>

  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
route: ActivatedRoute = inject(ActivatedRoute);
housingService = inject(HousingService);
housingLocation: HousingLocation | undefined

constructor()
{
   const housingLocationId = Number(this. route.snapshot.params['id']);
   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
}
}
