import { Component, EventEmitter, inject, Output } from '@angular/core';
import { fadresseCreate } from '../../forms/adresses.form';
import { AdressesService } from '../../../../Services/Adresses.service';
import { Adresse } from '../../../../Models/Adressses.model';

@Component({
  selector: 'app-add-adresses',
  templateUrl: './add-adresses.component.html',
  styleUrl: './add-adresses.component.css'
})
export class AddAdressesComponent {
  form = fadresseCreate()
  $Adresses = inject(AdressesService)
  @Output() event :EventEmitter<boolean> = new EventEmitter<boolean>();

  onSubmit(): void {
    if (this.form.valid) {
      this.$Adresses.addAdresses(this.form.value as Adresse).subscribe(() => {
        this.form = fadresseCreate();
        this.event.emit(true);
        });
    }
  }

}
