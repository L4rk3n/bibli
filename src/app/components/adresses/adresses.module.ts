import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdressesRoutingModule } from './adresses-routing.module';
import { AdressesComponent } from './adresses.component';
import { AddAdressesComponent } from './components/add-adresses/add-adresses.component';


@NgModule({
  declarations: [AdressesComponent, AddAdressesComponent],
  imports: [
    CommonModule,
    AdressesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdressesModule { }
