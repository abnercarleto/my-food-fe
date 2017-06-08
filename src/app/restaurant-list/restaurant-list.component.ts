import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  search: string;
  restaurants: Restaurant[];

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.restaurantService
      .list(this.search)
      .then(restaurants => this.restaurants = restaurants);
  }

  searchClick(): void {
    this.getList();
  }

}
