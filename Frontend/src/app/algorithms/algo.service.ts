import { Injectable } from '@angular/core';
import { UserService } from '../mainpage/dashbord/user-access/shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AlgoService {
  UserId: string;

  constructor(public userService: UserService) { }

  KeyHandler(key : string){
    var keylength : number;
    keylength = key.length;
    if (keylength < 8)
    {
      for(var i = 8; keylength < i; i--){
        key = key + '#';
      }
    }
    else if (keylength < 16 && keylength > 8)
    {
      for(var i = 16; keylength < i; i--){
        key = key + '#';
      }
    }
    else if (keylength < 24 && keylength > 16)
    {
      for(var i = 16; keylength < i; i--){
        key = key + '#';
      }
    }
    else if (keylength < 32 && keylength > 24)
    {
      for(var i = 16; keylength < i; i--){
        key = key + '#';
      }
    }
    return key;
  }

  //Data Uploading

  Dataupload(value , keys){

    var Auth : boolean;
    var user: { userid: string; };

    this.userService.Auth.subscribe(
      (data : boolean)=>{
        Auth = data;
      }
    );

    if (Auth == true)
    {
      this.userService.getUserProfile().subscribe(
        res => {
          user = res['user'];
          this.UserId = user.userid;
        }
      );
      this.userService.postData({"userid": this.UserId, "textin": value, "algoin" : "AES", "keyin": keys}).subscribe();
    }
  }
}
