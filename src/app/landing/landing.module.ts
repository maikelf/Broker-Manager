import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoginComponent } from './login/login.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, RegisterCompanyComponent, RecoverPasswordComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
