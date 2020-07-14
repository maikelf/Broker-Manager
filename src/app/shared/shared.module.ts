import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatTooltipModule,
  MatListModule,
  MatCardModule,
  MatCard,
  MatInputModule,
  MatInput,
  MatLabel,
  MatFormField,
  MatButton
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTooltipModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MatCard,
    MatInput,
    MatLabel,
    MatFormField,
    MatButton
  ]
})
export class SharedModule { }
