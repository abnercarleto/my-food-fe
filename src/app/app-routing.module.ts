import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent }   from './restaurant-list/restaurant-list.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants',  component: RestaurantListComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
