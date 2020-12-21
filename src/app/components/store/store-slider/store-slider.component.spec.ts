import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSliderComponent } from './store-slider.component';

describe('StoreSliderComponent', () => {
  let component: StoreSliderComponent;
  let fixture: ComponentFixture<StoreSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
