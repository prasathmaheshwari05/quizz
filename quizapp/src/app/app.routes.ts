import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent,children:[
    { path: 'dashboard', component: DashboardComponent },
  ]},
  { path: 'admin-login', component: AdminloginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }