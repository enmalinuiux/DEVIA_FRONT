import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'StoreProducts',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.scss']
})
export class StoreProductsComponent implements OnInit {

  productos: Array<any>; 

  constructor() { 
    this.productos = [
      {
        description: "Arroz La Garza",
        price: 15,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg"
      },
      {
        description: "Aceite Crisol",
        price: 20,
        img: "https://res.cloudinary.com/almacendo/image/upload/v1573739195/Aceite/Aceite-Crisol-Puro-de-Soya_-64oz-Front.jpg"
      },
      {
        description: "arroz",
        price: 15,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg"
      },
      {
        description: "arroz",
        price: 15,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg"
      },
      {
        description: "arroz",
        price: 15,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg"
      },
      {
        description: "arroz",
        price: 15,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg"
      }
    ]
  }

  ngOnInit(): void {
  }

}
