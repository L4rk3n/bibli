import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilisateursComponent } from './utilisateurs.component';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [UtilisateursComponent,AddUserComponent],
  imports: [
    CommonModule,
    UtilisateursRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UtilisateursModule { }
