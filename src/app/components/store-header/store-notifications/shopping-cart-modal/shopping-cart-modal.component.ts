import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ShoppingCartModal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent implements OnInit {

  btnRemove = faTrash;

  totalAmount: number;
  productos: Array<any>; 

  constructor() { 
    this.productos = [
      {
        description: "Arroz La Garza",
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

    this.totalAmount = 0;
    
    this.productos.forEach((item) => {
      this.totalAmount += item.price * item.cant;
    });
  }

  ngOnInit(): void {
  }

  removeItem(object: object){
    this.productos = this.productos.filter(obj => obj !== object);
  }
}