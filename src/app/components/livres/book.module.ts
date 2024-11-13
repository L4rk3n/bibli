import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivresComponent } from './livres.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookRoutingModule } from './book-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LivresComponent, AddBookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ],
   exports: [LivresComponent, AddBookComponent]
})
export class BookModule { }
