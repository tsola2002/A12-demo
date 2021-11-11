import { Component,} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, merge } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent OnInit, OnDestroy {
  title = 'A12-Demo-Apps';

  private subscription: Subscription = null;

  inputStreamData = ['john wick', 'inception', 'interstellar'];
  cartoonStreamData = ['Thunder Cats', 'Dragon Ball Z', 'Ninja Turtles'];
  outputStreamData = [];

  ngOnInit() {
  }

   constructor (){}  

  // We have to make sure that the mapped numbers are not greater than or equal to the length of inputStreamData.
  // We'll do this by taking a modulus on the number each time,
  // using the map operator as follows
  startStream(){
    const streamSource = interval(1500);
    const cartoonStreamSource = interval(1000);

    this.subscription = streamSource
        .pipe(
          map(output => output % this.inputStreamData.length),
          // we'll use another map method to fetch an element from the array for each of the stream's outputs,
          //as follow
          map(index => this.inputStreamData[index]),
          merge(cartoonStreamSource)
        ) 
      .subscribe(element => {
          this.outputStreamData.push(element);
      });

  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

}
