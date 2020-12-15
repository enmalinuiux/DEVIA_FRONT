import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNotificationsComponent } from './store-notifications.component';

describe('StoreNotificationsComponent', () => {
  let component: StoreNotificationsComponent;
  let fixture: ComponentFixture<StoreNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
