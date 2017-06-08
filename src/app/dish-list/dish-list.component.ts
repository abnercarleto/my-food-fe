import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { DishService } from '../dish.service';
import { Dish } from '../dish';


@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[];

  constructor(
    private router: Router,
    private dishService: DishService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.dishService
      .list()
      .then(dishes => this.dishes = dishes);
  }

  newClick(): void {
    this.router.navigate(['/dishes/new']);
  }

  editClick(dish: Dish): void {
    this.router.navigate(['/dishes', dish.id]);
  }

  removeClick(dish: Dish): void {
    this.dishService
      .remove(dish)
      .then(() => this.getList());
  }

}
