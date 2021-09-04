import { Component } from '@angular/core';
import * as JsEncryptModule from 'jsencrypt';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-rsaalgo',
  templateUrl: './rsaalgo.component.html',
  styleUrls: ['./rsaalgo.component.css']
})
export class RSAalgoComponent {

  PrivateKey : string;
  PublicKey : string;
  Encrypt : String;
  Decrypt : String;
  isShown0: boolean = false ; // hidden by default
  isShown1: boolean = false ; // hidden by default
  
  constructor(public keyhandeler : AlgoService) { }

  RSAenc(value,keysize){

    var keySize = keysize;
    var crypt = new JsEncryptModule.JSEncrypt(keySize);
    this.PrivateKey = crypt.getPrivateKey();
    this.PublicKey = crypt.getPublicKey();
    var Enc = crypt.encrypt(value);
    this.Encrypt = Enc.toString();
    //post Data
    this.keyhandeler.Dataupload(value , this.PublicKey);
    this.isShown0 = true;
  }

  RSAdec(value,keysize,PrivateKey){
    var keySize = keysize;
    var key = PrivateKey;
    var crypt = new JsEncryptModule.JSEncrypt(keySize);
    crypt.setPrivateKey(key);
    var Dec = crypt.decrypt(value);
    this.Decrypt = Dec.toString();
    if(this.Decrypt == 'false')
      {
       this.Decrypt = "The Input Details Aren't Vailid Please Check Your Given Details & Try Again";
       console.log('err');
      }
     else{
        //post Data
        this.keyhandeler.Dataupload(value,key);
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


