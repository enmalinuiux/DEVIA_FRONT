import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFiltersComponent } from './store-filters.component';

describe('StoreFiltersComponent', () => {
  let component: StoreFiltersComponent;
  let fixture: ComponentFixture<StoreFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
