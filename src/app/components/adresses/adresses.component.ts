import { Component } from '@angular/core';
import { Adresse } from '../../Models/Adressses.model';
import { AdressesService } from '../../Services/Adresses.service';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrl: './adresses.component.css'
})
export class AdressesComponent {
  Adresses :Adresse []= [];
  selectedAdresse?: Adresse;


  constructor(private AS: AdressesService) {}

  ngOnInit(event:boolean): void {
    this.loadData();
  }
  selectAdresse(Adresse: Adresse): void { this.selectedAdresse = Adresse; }

  getEvent(event: boolean): void {
    this.loadData(); 
  }
  
  loadData(){
    this.AS.getAdresses().subscribe((data: Adresse[]) => {
      this.Adresses = data;
    });
  }
}


