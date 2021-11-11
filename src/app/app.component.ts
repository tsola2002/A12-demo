import { Component } from '@angular/core';
import { interval,  Subscription } from 'rxjs';
import { map, merge } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A12-Demo-Apps';


}
