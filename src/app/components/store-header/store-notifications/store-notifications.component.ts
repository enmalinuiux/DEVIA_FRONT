import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'StoreNotifications',
  templateUrl: './store-notifications.component.html',
  styleUrls: ['./store-notifications.component.scss']
})
export class StoreNotificationsComponent implements OnInit {

  shoppingCart = faShoppingCart;
  notiCount: number;

  constructor(private modalService: NgbModal) {
    this.notiCount = 5
   }

  ngOnInit(): void {
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
