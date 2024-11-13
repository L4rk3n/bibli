import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adresse } from '../Models/Adressses.model';

@Injectable({
  providedIn: 'root'
})
export class AdressesService {
  private apiUrl = 'https://localhost:7211/api/Adresses';

  constructor(private http: HttpClient) {}

  getAdresses(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.apiUrl);
  }
  addAdresses(Adresse: Adresse):Observable<Adresse> {
    return this.http.post<Adresse>(this.apiUrl, Adresse);
  }
}