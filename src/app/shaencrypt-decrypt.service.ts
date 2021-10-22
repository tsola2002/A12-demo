import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SHAEncryptDecryptService {

  secretKey = "secretKey";

  constructor() { }

  // AES ENCRYPTION
  encrypt(value : string) : string{
    return crypto.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  // AES DECRYPTION
  decrypt(textToDecrypt : string){
    return crypto.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(crypto.enc.Utf8);
  }

  // SHA256 ENCRYPTION FUNCTION
  encryptSha(value: string): string {
    return crypto.SHA256(value).toString(crypto.enc.Hex);
  }

  // SHA DECRYPTION FUNCTION
  decryptSha(textToDecrypt: string) {
    
  }



  
}
