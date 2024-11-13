import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressesComponent } from './adresses.component';

const routes: Routes = 
  [
    { path : '', component: AdressesComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdressesRoutingModule { }




