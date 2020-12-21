import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'StoreNotificationShoppingCart',
  templateUrl: './store-notification-shopping-cart.component.html',
  styleUrls: ['./store-notification-shopping-cart.component.scss']
})
export class StoreNotificationShoppingCartComponent implements OnInit{
  
  @Input() productos: Array<any>;
  @Output() countChanged: EventEmitter<any> = new EventEmitter();

  btnRemove = faTrash;
  totalAmount: number;

  constructor() {
    this.totalAmount = 0;
  }

  ngOnInit(): void {
    this.calcTotalAmount();
  }

  removeItem(object: object){
    this.productos = this.productos.filter(obj => obj !== object);
    this.calcTotalAmount();
    this.countChanged.emit(this.productos);
  }

  calcTotalAmount() {
    this.totalAmount = 0;

    this.productos.forEach((item) => {
      this.totalAmount += item.price * item.cant;
    });
  }

  
}