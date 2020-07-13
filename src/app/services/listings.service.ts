import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './listingsResponse';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private url: string = "http://localhost:3000/listings";

  constructor(private http: HttpClient) { }

  public getListings(): Observable<Listing[]>  {
    return this.http.get<Listing[]>(this.url);
  }
}
