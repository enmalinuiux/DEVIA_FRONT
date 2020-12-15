import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'StoreProduct',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.scss']
})
export class StoreProductComponent implements OnInit {

  @Input() item: any;

  constructor() { 
    console.log("Producto: "+this.item);
  }

  ngOnInit(): void {
  }

}
