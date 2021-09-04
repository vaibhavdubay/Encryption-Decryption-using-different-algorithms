import { Component } from '@angular/core';
import { Blowfish } from 'javascript-blowfish';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-bfaalgo',
  templateUrl: './bfaalgo.component.html',
  styleUrls: ['./bfaalgo.component.css']
})
export class BFAalgoComponent {

  constructor(public keyhandeler: AlgoService) { }

  
  Bfsencryption = ""
  Bfsdecryption = ""
  
  isShown0: boolean = false ; // hidden by default
  isShown1: boolean = false ; // hidden by default

  set(keys, value){
    var bf = new Blowfish(keys);
    var encrypted = bf.encrypt(value);

    this.Bfsencryption = encrypted.toString();
    this.isShown0 = true;
    //post Data
    
    this.keyhandeler.Dataupload(value , keys);
  }


  //The get method is use for decrypt the value.
  get(keys, value){
    var bf = new Blowfish(keys);
    var decrypted = bf.decrypt(value);

    this.Bfsdecryption = bf.trimZeros(decrypted);
    this.isShown1 = true;
    //post Data

    this.keyhandeler.Dataupload(value , keys);
  }

  t0(){
    this.isShown0 = false;
  }
  t1(){
    this.isShown1 = false;
  }

}
