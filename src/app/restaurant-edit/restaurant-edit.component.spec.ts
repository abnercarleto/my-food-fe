import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEditComponent } from './restaurant-edit.component';

describe('RestaurantEditComponent', () => {
  let component: RestaurantEditComponent;
  let fixture: ComponentFixture<RestaurantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
