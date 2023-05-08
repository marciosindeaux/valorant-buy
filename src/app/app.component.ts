import { Component } from '@angular/core';
import { BuyService } from './shared/services/BuyService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buyService: BuyService = new BuyService();
  title = 'Tour of Heroes';
}
