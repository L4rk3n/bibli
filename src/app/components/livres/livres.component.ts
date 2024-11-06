import { Component, OnInit } from '@angular/core';
import { Livre } from '../../Models/Livres.model';
import { LivresService } from '../../Services/Livres.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent implements OnInit {
  Livres :Livre []= [];


  constructor(private LS: LivresService) {}

  ngOnInit(): void {
    this.LS.getBooks().subscribe((data: Livre[]) => {
      this.Livres = data;
    });
  }
}
