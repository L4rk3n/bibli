import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../Models/Livres.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  private apiUrl = 'https://localhost:7211/api/Livres';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiUrl);
  }
}
