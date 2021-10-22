import { Component, OnInit } from '@angular/core';
import { SHAEncryptDecryptService } from './shaencrypt-decrypt.service';

//import * as crypto from 'crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private _shaEncryptDecryptService: SHAEncryptDecryptService ) { }

  title = 'A12-Demo-Apps';

  order_id: string = 'test';
  payment_id: string = 'payment';
  generated_hash: any = '';
  generated_hash2: any = '';

  ngOnInit() {

    // this.generated_hash = crypto.SHA256(this.order_id).toString(crypto.enc.Hex);
    // console.log('GENERATED SIGNATURE TEST', this.generated_hash);

    // this.generated_hash2 = crypto.SHA256(this.payment_id).toString(crypto.enc.Hex);
    // console.log('GENERATED SIGNATURE PAYMENT', this.generated_hash2);

    // SERVICE CALL
    this.generated_hash = this._shaEncryptDecryptService.encryptSha(this.order_id);
    console.log('GENERATED SIGNATURE TEST', this.generated_hash);

    // AES ENCRYPTION TEST SERVICE CALL
    this.generated_hash = this._shaEncryptDecryptService.encrypt(this.order_id);
    console.log('GENERATED AES ENCRYPT TEST', this.generated_hash);

    // AES DECRYPTION TEST SERVICE CALL
    this.generated_hash2 = this._shaEncryptDecryptService.decrypt(this.generated_hash);
    console.log('GENERATED AES DECRYPT TEST', this.generated_hash2);


  }



}
