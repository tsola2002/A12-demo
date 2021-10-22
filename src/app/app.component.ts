import { Component, OnInit } from '@angular/core';
import * as crypto from 'crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A12-Demo-Apps';

  order_id: string = 'test';
  payment_id: string = 'payment';
  generated_hash: any = '';
  generated_hash2: any = '';

  ngOnInit() {
    this.generated_hash = crypto.SHA256(this.order_id).toString(crypto.enc.Hex);
    console.log('GENERATED SIGNATURE TEST', this.generated_hash);

    this.generated_hash2 = crypto.SHA256(this.payment_id).toString(crypto.enc.Hex);
    console.log('GENERATED SIGNATURE PAYMENT', this.generated_hash2);


  }



}
