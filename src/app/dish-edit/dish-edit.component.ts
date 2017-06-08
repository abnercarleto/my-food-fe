import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { DishService } from '../dish.service';
import { RestaurantService } from '../restaurant.service';

import { Dish } from '../dish';
import { Restaurant } from '../restaurant';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  dish: Dish = new Dish();
  restaurants: Restaurant[] = [];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dishService: DishService,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.loadRestaurants();
    this.route.params
      .switchMap((params: Params) => this.dishService.get(+params['id']))
      .subscribe(dish => this.dish = dish || new Dish());
  }

  loadRestaurants(): void {
    this.restaurantService.list('')
      .then(restaurants => this.restaurants = restaurants);
  }

  cancelClick(): void {
    this.location.back();
  }

  saveClick(): void {
    var dish = new Dish();
    dish.id = this.dish.id;
    dish.restaurant_id = this.dish.restaurant_id;
    dish.name = this.dish.name;
    dish.price = this.dish.price;
    this.dishService.saveOrUpdate(dish)
      .then(() => this.moveToList());
  }

  moveToList(): void {
    this.router.navigate(['/dishes']);
  }

}
