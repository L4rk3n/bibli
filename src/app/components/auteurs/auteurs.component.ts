import { Component, OnInit } from '@angular/core';
import { Auteur } from '../../Models/Auteurs.model';
import { LivresService } from '../../Services/Auteurs.service';

@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrl: './auteurs.component.css'
})

export class AuteursComponent implements OnInit {
  Auteurs :Auteur []= [];


  constructor(private LS: LivresService) {}

  ngOnInit(): void {
    this.LS.getAuthors().subscribe((data: Auteur[]) => {
      this.Auteurs = data;
    });
  }
}