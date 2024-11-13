import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Models/utilisateurs.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  private apiUrl = 'https://localhost:7211/api/Utilisateurs';

  constructor(private http: HttpClient) {}

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }
  addUtilisateurs(Utilisateur: Utilisateur):Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, Utilisateur);
  }
}