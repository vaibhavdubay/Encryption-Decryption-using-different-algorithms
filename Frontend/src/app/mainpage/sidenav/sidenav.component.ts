import { Observable } from 'rxjs';
import { Component, HostListener } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UserService } from '../dashbord/user-access/shared/user.service';

declare var Clickbtn;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  Auth = true;
  UserName ;
  screenHeight: number;
  screenWidth: number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(){
      this.userService.Auth.subscribe(
        (data : boolean)=>{
        this.Auth = data;
        }
      );
      this.userService.FullName.subscribe(
        (data : string)=>{
        this.UserName = data;
        }
      );
    }
        
    Logout(){
      this.userService.deleteToken();
      this.Auth = false;
    }

    
  buttontrig(){
    Clickbtn('mi');
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.screenWidth = window.innerWidth;
    }

  constructor(private breakpointObserver: BreakpointObserver,public userService: UserService) {this.getScreenSize();}

}
