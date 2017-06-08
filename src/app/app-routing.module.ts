import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent }   from './restaurant-list/restaurant-list.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants',  component: RestaurantListComponent },
  { path: 'restaurants/new',  component: RestaurantEditComponent },
  { path: 'restaurants/:id', component: RestaurantEditComponent },
  { path: 'dishes', component: DishListComponent },
  { path: 'dishes/new',  component: DishEditComponent },
  { path: 'dishes/:id', component: DishEditComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
