import { Component } from '@angular/core';
import { interval,  Subscription } from 'rxjs';
import { map, merge } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //subscription type is how you actually extract data from observables
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  cartoonStreamData = ['Thunder Cats', 'Dragon Ball Z', 'Ninja Turtles'];
  outputStreamData = [];

  // We have to make sure that the mapped numbers are not greater than or equal to the length of inputStreamData.
  // We'll do this by taking a modulus on the number each time,
  // using the map operator as follows
  startStream() {
    // interval Emits numbers in sequence based on provided timeframe
    const streamSource = interval(2000);

    const cartoonStreamSource = interval(1000)
      // pipe chains operators together
      .pipe(
        map(output => output % this.cartoonStreamData.length),
        // This makes sure we can always get an item from the inputStreamData array using the number as an index
        map(index => this.cartoonStreamData[index]),
    )
    
    this.subscription = streamSource
      // pipe chains operators together
      .pipe(
        map(output => output % this.inputStreamData.length),
        //  fetch an element from the array for each of the stream's outputs
        map(index => this.inputStreamData[index]),
        // we use merge (instance) method to combine the two streams and add an element from the respective stream data array when the streams emit a value.
        merge(cartoonStreamSource)
    )
      // this is how you extract the data from the observables
      .subscribe(element => {
        this.outputStreamData.push(element);
      });
    
      
    
  }

  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

}
