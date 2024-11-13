import { Component, output } from '@angular/core';
import { Utilisateur } from '../../../../Models/utilisateurs.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addEvent = output<Utilisateur>({ alias: 'add'});

  ngOnInit() {
    setTimeout(() => {
      this.addEvent.emit({ email: 'Blop', iDadresse: 42, nom: 'Blop', prenom: 'Blop', dateNaissance: 'Blop', password: 'Blop', iDutilisateur: 42 });
    }, 10_000)
  }
}
