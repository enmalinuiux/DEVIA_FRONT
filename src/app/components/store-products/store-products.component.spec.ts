import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductsComponent } from './store-products.component';

describe('StoreProductsComponent', () => {
  let component: StoreProductsComponent;
  let fixture: ComponentFixture<StoreProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
