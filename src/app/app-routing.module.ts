import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './pages/singup/singup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [

{
  path: '',
  component: HomeComponent,
},

{
  path: 'signup',
  component: SingupComponent,
  pathMatch: 'full' 
  
},

{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
