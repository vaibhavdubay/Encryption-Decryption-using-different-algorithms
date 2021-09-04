import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthModule } from './modules/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components Module

import { SidenavComponent } from './mainpage/sidenav/sidenav.component';
import { PNFErrorComponent } from './mainpage/pnferror/pnferror.component';
import { MainPageComponent } from './mainpage/dashbord/main-page.component';
import { UserDashComponent } from './mainpage/dashbord/user-dash/user-dash.component';
import { UserAccessComponent } from './mainpage/dashbord/user-access/user-access.component';

//Algorithm Components

import { AlgoService } from './algorithms/algo.service';
import { AESalgoComponent } from './algorithms/aesalgo/aesalgo.component';
import { BFAalgoComponent } from './algorithms/bfaalgo/bfaalgo.component';
import { RSAalgoComponent } from './algorithms/rsaalgo/rsaalgo.component';
import { DESalgoComponent } from './algorithms/desalgo/desalgo.component';
import { DES3algoComponent } from './algorithms/des3algo/des3algo.component';

//Material Modules

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainPageComponent,
    UserAccessComponent,
    PNFErrorComponent,
    UserDashComponent,
    AESalgoComponent,
    BFAalgoComponent,
    RSAalgoComponent,
    DES3algoComponent,
    DESalgoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
  // Material Module
    
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [ AlgoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
