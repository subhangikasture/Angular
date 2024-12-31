import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template:`
  <main>
  <h1> Hello world!! </h1>
  <section class="content">
    <app-home></app-home>
  </section>
  </main>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'homes';
}
