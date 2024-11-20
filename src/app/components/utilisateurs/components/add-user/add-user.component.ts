import { Component, inject, output } from '@angular/core';
import { Utilisateur } from '../../../../Models/utilisateurs.model';
import { fUserCreate } from '../../forms/user.form';
import { UtilisateursService } from '../../../../Services/Utilisateurs.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addEvent = output<Utilisateur>({ alias: 'add'});
  form = fUserCreate()
  $user = inject(UtilisateursService);

onSubmit(): void {
 if (this.form.valid) {
   this.$user.addUtilisateurs(this.form.value as Utilisateur).subscribe(() => {
     this.form = fUserCreate();
     this.addEvent.emit(this.form.value as Utilisateur);
     });
}
}
}
