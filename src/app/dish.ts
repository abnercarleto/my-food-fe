import { Restaurant } from './restaurant';

export class Dish {
    id: Number;
    restaurant_id: Number;
    name: String;
    price: Number;
    restaurant: Restaurant;
}