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
        price: 250,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg",
        cant: 5,
        offert: false
      },
      {
        description: "Aceite Crisol",
        price: 200,
        img: "https://res.cloudinary.com/almacendo/image/upload/v1573739195/Aceite/Aceite-Crisol-Puro-de-Soya_-64oz-Front.jpg",
        cant: 6,
        offert: false
      },
      {
        description: "Habichuelas JAJA",
        price: 35,
        img: "https://zupleys.com/images/products/5e53208fa27c8.jpg",
        cant: 2,
        offert: false
      },
      {
        description: "Arroz La Garza",
        price: 250,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg",
        cant: 5,
        offert: false
      },
      {
        description: "Aceite Crisol",
        price: 200,
        img: "https://res.cloudinary.com/almacendo/image/upload/v1573739195/Aceite/Aceite-Crisol-Puro-de-Soya_-64oz-Front.jpg",
        cant: 6,
        offert: false
      },
      {
        description: "Habichuelas JAJA",
        price: 35,
        img: "https://zupleys.com/images/products/5e53208fa27c8.jpg",
        cant: 2,
        offert: true
      },
      {
        description: "Arroz La Garza",
        price: 250,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg",
        cant: 5,
        offert: false
      },
      {
        description: "Aceite Crisol",
        price: 200,
        img: "https://res.cloudinary.com/almacendo/image/upload/v1573739195/Aceite/Aceite-Crisol-Puro-de-Soya_-64oz-Front.jpg",
        cant: 6,
        offert: false
      },
      {
        description: "Habichuelas JAJA",
        price: 35,
        img: "https://zupleys.com/images/products/5e53208fa27c8.jpg",
        cant: 2,
        offert: true
      },
      {
        description: "Arroz La Garza",
        price: 250,
        img: "https://compradirecta.do/wp-content/uploads/2018/05/A-80-450x450.jpg",
        cant: 5,
        offert: false
      },
      {
        description: "Aceite Crisol",
        price: 200,
        img: "https://res.cloudinary.com/almacendo/image/upload/v1573739195/Aceite/Aceite-Crisol-Puro-de-Soya_-64oz-Front.jpg",
        cant: 6,
        offert: false
      },
      {
        description: "Habichuelas JAJA",
        price: 35,
        img: "https://zupleys.com/images/products/5e53208fa27c8.jpg",
        cant: 2,
        offert: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
