import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAuthorComponent } from './components/add-author/add-author/add-author.component';
import { AuteursComponent } from './auteurs.component';


@NgModule({
  declarations: [AuteursComponent ,AddAuthorComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AuthorModule { }
