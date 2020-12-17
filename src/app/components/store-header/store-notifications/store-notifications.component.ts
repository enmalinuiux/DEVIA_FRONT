import { Component, OnInit } from '@angular/core';
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'StoreNotifications',
  templateUrl: './store-notifications.component.html',
  styleUrls: ['./store-notifications.component.scss']
})
export class StoreNotificationsComponent implements OnInit {

  shoppingCart = faShoppingCart;
  notify = faBell;

  notiCount: number;
  cartItemCount: number;

  constructor() {
    this.notiCount = 5
    this.cartItemCount = 3;
   }

  ngOnInit(): void {
  }
}
