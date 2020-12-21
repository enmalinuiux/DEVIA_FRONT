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
  productos: { description: string; price: number; img: string; cant: number; }[];

  constructor() {
    this.productos = [
      {
        "description": "Arroz La Garza",
        price: 250,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg",
        cant: 5
      },
      {
        description: "Aceite Crisol",
        price: 200,
        img: "https://res.cloudinary.com/almacendo/image/upload/v1573739195/Aceite/Aceite-Crisol-Puro-de-Soya_-64oz-Front.jpg",
        cant: 6
      },
      {
        description: "Habichuelas JAJA",
        price: 35,
        img: "https://zupleys.com/images/products/5e53208fa27c8.jpg",
        cant: 2
      }
    ]
    
    this.notiCount = 5
    this.cartItemCount = this.productos.length;
   }

  ngOnInit(): void {
  }

  countChangedHandler(prodObject: any) {
    this.productos = prodObject;
    
    this.cartItemCount = this.productos.length;
  }
}
