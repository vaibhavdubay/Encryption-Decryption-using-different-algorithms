import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AESalgoComponent } from './algorithms/aesalgo/aesalgo.component';
import { RSAalgoComponent } from './algorithms/rsaalgo/rsaalgo.component';
import { BFAalgoComponent } from './algorithms/bfaalgo/bfaalgo.component';
import { DES3algoComponent } from './algorithms/des3algo/des3algo.component';
import { DESalgoComponent } from './algorithms/desalgo/desalgo.component';
import { MainPageComponent } from './mainpage/dashbord/main-page.component';
import { SidenavComponent } from './mainpage/sidenav/sidenav.component';
import { PNFErrorComponent } from './mainpage/pnferror/pnferror.component';
import { AuthGuard } from './mainpage/dashbord/user-access/auth/auth.guard';

const routes: Routes = [
  { path : '', component : SidenavComponent, children: [
  { path : '', component : MainPageComponent },
  { path : 'AES', component : AESalgoComponent},
  { path : 'BFA', component : BFAalgoComponent},
  { path : 'DES', component : DESalgoComponent},
  { path : 'DES3', component : DES3algoComponent},
  { path : 'RSA', component : RSAalgoComponent},
  { path : 'userDash', component : MainPageComponent, canActivate:[AuthGuard]},
  { path : '**', component : PNFErrorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
