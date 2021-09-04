import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from '../mainpage/dashbord/user-access/auth/auth.guard';
import { UserService } from '../mainpage/dashbord/user-access/shared/user.service';
import { AuthInterceptor } from '../mainpage/dashbord/user-access/auth/auth.interceptor';
import { UserAccessComponent } from '../mainpage/dashbord/user-access/user-access.component';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [UserAccessComponent]
})
export class AuthModule { }
