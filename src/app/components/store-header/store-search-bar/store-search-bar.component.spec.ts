import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSearchBarComponent } from './store-search-bar.component';

describe('StoreSearchBarComponent', () => {
  let component: StoreSearchBarComponent;
  let fixture: ComponentFixture<StoreSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
