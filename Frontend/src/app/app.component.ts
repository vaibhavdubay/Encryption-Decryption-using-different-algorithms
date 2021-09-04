import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './mainpage/dashbord/user-access/shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  userDetails: { userid: string; fullName: string; };
  constructor( public userService: UserService ) {}
  ngOnInit(): void {
    if(this.userService.isLoggedIn())
    {
      this.userService.changeAuth(true);
    }
  }
  ngDoCheck() {
    if(this.userService.isLoggedIn())
    {
      this.userService.changeAuth(true);
      this.userService.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'];
        },
        err => { 
          console.log(err);
        }
      );
      this.userService.changeUserId(this.userDetails.userid);
      this.userService.changeFullName(this.userDetails.fullName);
    }
    else {
      this.userService.changeAuth(false);
    }
  }
}