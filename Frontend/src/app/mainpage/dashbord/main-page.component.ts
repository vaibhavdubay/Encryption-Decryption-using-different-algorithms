import { Component, OnInit } from '@angular/core';
import { UserService } from './user-access/shared/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  userAuth : boolean;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.Auth.subscribe(
      (data : boolean)=>{
      this.userAuth = data;
      });
  }

}
