import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auteur } from '../Models/Auteurs.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  private apiUrl = 'https://localhost:7211/api/Auteurs';

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(this.apiUrl);
  }
}