import { Component, computed, inject, signal } from '@angular/core';
import { Utilisateur } from '../../Models/utilisateurs.model';
import { UtilisateursService } from '../../Services/Utilisateurs.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  private $us = inject(UtilisateursService)

  users = signal<Utilisateur[]>([])
  selectedUtilisateur?: Utilisateur;

  sortedUser = computed(() => {
    return this.users().sort((a, b) => a.nom.localeCompare(b.nom));
  });

  selectUtilisateur(Utilisateur: Utilisateur): void { this.selectedUtilisateur = Utilisateur; }

  ngOnInit() {
    this.loadData();
  }

  select(user: Utilisateur) {
    throw new Error('Method not implemented.');
    }
  addUser(user: Utilisateur) {
    this.users.update((current) => [...current, user]);
  }

  // Utilisateurs :Utilisateur []= [];
  // selectedUtilisateur?: Utilisateur;

  // constructor(private US: UtilisateursService) {}

  // ngOnInit(): void {
  //   this.loadData(); 
  // }
  // selectLivre(Utilisateur: Utilisateur): void { this.selectedUtilisateur = Utilisateur; }

  // getEvent(event: Utilisateur): void {
  //   this.loadData();
  // }

  loadData(){
    this.$us.getUtilisateurs().subscribe((data: Utilisateur[]) => {
      this.users.set(data);
    });
  }



}
