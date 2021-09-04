import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-desalgo',
  templateUrl: './desalgo.component.html',
  styleUrls: ['./desalgo.component.css']
})
export class DESalgoComponent {

  constructor(public keyhandeler : AlgoService) { }

  Desencryption = ""
  Desdecryption = ""
  
  isShown0: boolean = false ; // hidden by default
  isShown1: boolean = false ; // hidden by default

  set(keys, value){
    var k = keys; 
    keys = this.keyhandeler.KeyHandler(keys);
    var keyWords = CryptoJS.enc.Utf8.parse(keys);
    var ivWords = CryptoJS.lib.WordArray.create([0, 0]);
    var encrypted = CryptoJS.DES.encrypt(value, keyWords, { 
      iv: ivWords,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    this.Desencryption = encrypted.toString();
    this.isShown0 = true;
    //post Data
    this.keyhandeler.Dataupload(value , k);
  }

  //The get method is use for decrypt the value.
  get(keys, value){
    var k = keys; 
    keys = this.keyhandeler.KeyHandler(keys);
    var keyWords = CryptoJS.enc.Utf8.parse(keys);
    var ivWords = CryptoJS.lib.WordArray.create([0, 0]);

    var decrypted = CryptoJS.DES.decrypt(value, keyWords, { 
      iv: ivWords,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    if(decrypted.toString() == '')
    {
      this.Desdecryption = 'Wrong Key Entered Please Enter The Currect Key';
    }
    else{
      //post Data
      this.keyhandeler.Dataupload(value , k);
      this.Desdecryption = decrypted.toString(CryptoJS.enc.Utf8);
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
