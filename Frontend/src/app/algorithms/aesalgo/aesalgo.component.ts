import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-aesalgo',
  templateUrl: './aesalgo.component.html',
  styleUrls: ['./aesalgo.component.css']
})
export class AESalgoComponent{
  Email: string;

  constructor(public keyhandeler : AlgoService) { }


  Aesencryption = ""
  Aesdecryption = ""
  
  Auth:boolean;
  isShown0: boolean = false ; // hidden by default
  isShown1: boolean = false ; // hidden by default

  set(keys, value){
    var k = keys; 
    keys = this.keyhandeler.KeyHandler(keys);
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    this.Aesencryption = encrypted.toString();   
    this.isShown0 = true;
    //post Data
    this.keyhandeler.Dataupload(value , k);
  }


  //The get method is use for decrypt the value.
  get(keys, value){
    var k = keys; 
    keys = this.keyhandeler.KeyHandler(keys);
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    if(decrypted.toString() == '')
    {
      this.Aesdecryption = 'Wrong Key Entered Please Enter The Currect Key';
    }
    else{
      this.Aesdecryption = decrypted.toString(CryptoJS.enc.Utf8);
      
      //post Data
      
      this.keyhandeler.Dataupload(value , k);
    }
    this.isShown1 = true;
  }

  t0(){
    this.isShown0 = false;
  }
  t1(){
    this.isShown1 = false;
  }
}
