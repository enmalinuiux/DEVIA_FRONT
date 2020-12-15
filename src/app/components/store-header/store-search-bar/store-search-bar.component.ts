import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'StoreSearchBar',
  templateUrl: './store-search-bar.component.html',
  styleUrls: ['./store-search-bar.component.scss']
})
export class StoreSearchBarComponent implements OnInit {

  categories: Array<any>;

  constructor() {
    this.categories = ["bebidas","cereales","dulces","viberes","frutas","cosmericos"]
   }

  ngOnInit(): void {
  }

}
