import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Livre } from '../Models/Livres.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  private apiUrl = 'https://localhost:7211/api/Livres';
  // bookAddedSubject: Subject<Livre> = new Subject<Livre>();

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiUrl);
  }
  addBook(book: Livre): Observable<Livre> { 
    // this.bookAddedSubject.next(book);
    return this.http.post<Livre>(this.apiUrl, book);
  }
}
