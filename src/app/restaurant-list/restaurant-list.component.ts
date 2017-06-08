import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
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
    private router: Router,
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

  newClick(): void {
    this.router.navigate(['/restaurants/new']);
  }

  editClick(restaurant: Restaurant): void {
    this.router.navigate(['/restaurants', restaurant.id]);
  }

  removeClick(restaurant: Restaurant): void {
    this.restaurantService
      .remove(restaurant)
      .then(() => this.getList());
  }

}
