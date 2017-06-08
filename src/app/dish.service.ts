import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dish } from './dish';


@Injectable()
export class DishService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private dishUrl = '/api/dishes';

  constructor(private http: Http) { }

  list(): Promise<Dish[]> {
    return this.http.get(this.dishUrl)
      .toPromise()
      .then(response => response.json() as Dish[]);
  }

  saveOrUpdate(dish: Dish): Promise<Dish> {
    return dish.id ? this.update(dish) : this.create(dish);
  }

  create(dish: Dish): Promise<Dish> {
    console.log(dish);
    console.log(JSON.stringify(dish));
    
    return this.http.post(this.dishUrl, JSON.stringify(dish), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Dish);
  }

  update(dish: Dish): Promise<Dish> {
    const updateUrl = this.dishUrl + '/' + dish.id;
    return this.http.patch(updateUrl, JSON.stringify(dish), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Dish);
  }

  remove(dish: Dish): Promise<Dish> {
    const removeUrl = this.dishUrl + '/' + dish.id;
    return this.http.delete(removeUrl, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

  get(id: Number): Promise<Dish> {
    const url = id ? (this.dishUrl + '/' + id) : this.dishUrl;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Dish);
  }

}
