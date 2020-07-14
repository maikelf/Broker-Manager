import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { BrokersListComponent } from './brokers/brokers-list/brokers-list.component';
import { LoadsListComponent } from './loads/loads-list/loads-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CarrierListComponent } from './carriers/carrier-list/carrier-list.component';

@NgModule({
  declarations: [
    DefaultComponent,
    MainBoardComponent,
    SettingsComponent,
    InfoComponent,
    CompaniesListComponent,
    BrokersListComponent,
    LoadsListComponent,
    CustomerListComponent,
    CarrierListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DashboardModule { }
