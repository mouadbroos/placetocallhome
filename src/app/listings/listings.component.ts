import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../services/listingsResponse';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  private listings$: Observable<Listing[]> 

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.listings$ = this.listingsService.getListings();
  }

}
