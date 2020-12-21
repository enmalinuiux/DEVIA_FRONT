import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNotificationShoppingCartComponent } from './store-notification-shopping-cart.component';

describe('StoreNotificationShoppingCartComponent', () => {
  let component: StoreNotificationShoppingCartComponent;
  let fixture: ComponentFixture<StoreNotificationShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreNotificationShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreNotificationShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
