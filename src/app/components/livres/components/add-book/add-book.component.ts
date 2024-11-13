import { Component, EventEmitter, inject, output, Output } from '@angular/core';
import { LivresService } from '../../../../Services/Livres.service';
import { Livre } from '../../../../Models/Livres.model';
import { fBookCreate } from '../../forms/book.form';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  form = fBookCreate()
  $livres = inject(LivresService);
 @Output() event :EventEmitter<boolean> = new EventEmitter<boolean>();
  

 onSubmit(): void {
  if (this.form.valid) {
    this.$livres.addBook(this.form.value as Livre).subscribe(() => {
      this.form = fBookCreate();
      this.event.emit(true);
      });
  }
}
}

