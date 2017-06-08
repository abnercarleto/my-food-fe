import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { RestaurantService } from '../restaurant.service';

import { Restaurant } from '../restaurant';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.restaurantService.get(+params['id']))
      .subscribe(restaurant => this.restaurant = restaurant);
  }

  cancelClick(): void {
    this.location.back();
  }

  saveClick(): void {
    this.restaurantService.saveOrUpdate(this.restaurant)
      .then(() => this.moveToList());
  }

  moveToList(): void {
    this.router.navigate(['/restaurants']);
  }

}
