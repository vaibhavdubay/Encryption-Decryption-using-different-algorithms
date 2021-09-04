import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-des3algo',
  templateUrl: './des3algo.component.html',
  styleUrls: ['./des3algo.component.css']
})
export class DES3algoComponent {

  constructor(public keyhandeler : AlgoService) { }

  Des3encryption = ""
  Des3decryption = ""
  
  isShown0: boolean = false ; // hidden by default
  isShown1: boolean = false ; // hidden by default

  set(keys, value){
    var k = keys; 
    keys = this.keyhandeler.KeyHandler(keys);
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.TripleDES.encrypt(value, key,
    {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    this.Des3encryption = encrypted.toString();
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
    var decrypted = CryptoJS.TripleDES.decrypt(value, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    
    if(decrypted.toString() == '')
    {
      this.Des3decryption = 'Wrong Key Entered Please Enter The Currect Key';
    }
    else{
      this.Des3decryption = decrypted.toString(CryptoJS.enc.Utf8);
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
