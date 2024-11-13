import { Component, OnInit } from '@angular/core';
import { Auteur } from '../../Models/Auteurs.model';
import { AuteursService } from '../../Services/Auteurs.service';


@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrl: './auteurs.component.css'
})

export class AuteursComponent implements OnInit {
  Auteurs :Auteur []= [];


  constructor(private AS: AuteursService) {}

  ngOnInit(): void {
    this.loadData();
  }
  getEvent(event: boolean): void {
    this.loadData(); 
  }

  loadData() {
    this.AS.getAuthors().subscribe((data: Auteur[]) => {
      this.Auteurs = data;
    });
  }
}