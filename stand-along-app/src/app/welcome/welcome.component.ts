import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  standalone:true,
  selector: 'app-welcome',
  imports:[
    DetailsComponent
  ],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
