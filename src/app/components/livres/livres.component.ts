import { Component, OnInit } from '@angular/core';
import { Livre } from '../../Models/Livres.model';
import { LivresService } from '../../Services/Livres.service';
import { Observable } from 'rxjs';
import { AddBookComponent } from './components/add-book/add-book.component';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent implements OnInit {
  Livres :Livre []= [];
  selectedLivre?: Livre;

  constructor(private LS: LivresService) {}

  ngOnInit(): void {
    this.loadData(); 
  }
  selectLivre(livre: Livre): void { this.selectedLivre = livre; }

  getEvent(event: boolean): void {
    this.loadData(); 
  }

  loadData(){
    this.LS.getBooks().subscribe((data: Livre[]) => {
      this.Livres = data;
    });
  }
}
