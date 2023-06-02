import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './pages/singup/singup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { compileClassMetadata } from '@angular/compiler';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';


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
},

{
  path: 'admin-dash',
  component: AdminDashboardComponent, 
  canActivate: [AdminGuard],

  children:[
    {
        path: '',
        component: WelcomeComponent,
    },
    {
      path:'profile',
      component: ProfileComponent,
    },
    {
      path: "categories",
      component:ViewCategoriesComponent,
    },
    {
      path:'add-category',
      component: AddCategoryComponent,
    }
  ]

},

{
  path: 'user-dashboard',
  component: UserDashboardComponent,
  pathMatch: 'full',
  canActivate: [NormalGuard],
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
