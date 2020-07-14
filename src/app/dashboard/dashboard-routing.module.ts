import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { InfoComponent } from './info/info.component';
import { SettingsComponent } from './settings/settings.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { BrokersListComponent } from './brokers/brokers-list/brokers-list.component';
import { LoadsListComponent } from './loads/loads-list/loads-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CarrierListComponent } from './carriers/carrier-list/carrier-list.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: 'main', component: MainBoardComponent },
      { path: 'info', component: InfoComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'companies', component: CompaniesListComponent },
      { path: 'brokers', component: BrokersListComponent },
      { path: 'loads', component: LoadsListComponent },
      { path: 'customers', component: CustomerListComponent },
      { path: 'carriers', component: CarrierListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
