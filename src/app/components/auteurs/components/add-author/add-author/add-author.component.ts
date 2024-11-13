import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Auteur } from '../../../../../Models/Auteurs.model';
import { fauthorCreate } from '../../../forms/author.form';
import { AuteursService } from '../../../../../Services/Auteurs.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})

export class AddAuthorComponent {
  form = fauthorCreate()
  $auteurs = inject(AuteursService)
  @Output() event :EventEmitter<boolean> = new EventEmitter<boolean>();


  

  onSubmit(): void {
    if (this.form.valid) {
      this.$auteurs.addAuthor(this.form.value as Auteur).subscribe(() => {
        this.form = fauthorCreate();
        this.event.emit(true);
        });
    }
  }
}