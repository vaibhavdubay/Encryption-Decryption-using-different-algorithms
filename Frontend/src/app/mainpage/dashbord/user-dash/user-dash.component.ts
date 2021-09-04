import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { UserService } from '../user-access/shared/user.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit, AfterContentChecked{

  Userdata : object;
  UserId : string;
  ClearLog: String; 
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.UserId.subscribe(
      (data : string)=>{
        this.UserId = data;
      }
    )
    
    this.userService.data.subscribe(
      (data : object)=>{
      this.Userdata = data;
    });
  }
  ngAfterContentChecked()
  {
    this.userService.getData(this.UserId).subscribe(
      (data : object) => {
        this.Userdata = data;
        this.userService.changeUserdata(data);
      }
    );
  }
  ClearallData(){
    this.userService.clearallData().subscribe({
      next: data => {
          var status = 'Delete successful';
          console.log(status,data);
      },
      error: error => {
          var errorMessage = error.message;
          this.ClearLog = errorMessage;
      }
  });
    this.Userdata = [];
  }
}
