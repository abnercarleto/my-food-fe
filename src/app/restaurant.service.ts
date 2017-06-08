import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Restaurant } from './restaurant';

@Injectable()
export class RestaurantService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private restaurantUrl = '/api/restaurants';

  constructor(private http: Http) { }

  list(q: string): Promise<Restaurant[]> {
    return this.http.get(this.restaurantUrl + '?q=' + (q || ''))
      .toPromise()
      .then(response => response.json() as Restaurant[]);
  }

  remove(restaurant: Restaurant): Promise<Restaurant> {
    const removeUrl = this.restaurantUrl + '/' + restaurant.id;
    return this.http.delete(removeUrl, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

}
