import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }   from './app-routing.module';

import { RestaurantService } from './restaurant.service';
import { DishService } from './dish.service';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantEditComponent,
    DishListComponent,
    DishEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RestaurantService,
    DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
