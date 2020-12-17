import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'StoreFilters',
  templateUrl: './store-filters.component.html',
  styleUrls: ['./store-filters.component.scss']
})
export class StoreFiltersComponent implements OnInit {

  filters: Array<any>;

  constructor() { 
    this.filters = [
      {
        id: "1",
        name: "Color",
        ops: [
          {
            op: "Verde",
            cant: 25
          },
          {
            op: "Azul",
            cant: 25
          },
          {
            op: "Naranja",
            cant: 25
          },
          {
            op: "Rojo",
            cant: 25
          },
          {
            op: "Purpura",
            cant: 25
          }
        ]
      },
      {
        id: "2",
        name: "Marca",
        ops: [
          {
            op: "Verde",
            cant: 25
          },
          {
            op: "Azul",
            cant: 25
          },
          {
            op: "Naranja",
            cant: 25
          },
          {
            op: "Rojo",
            cant: 25
          },
          {
            op: "Purpura",
            cant: 25
          }
        ]
      },
      {
        id: "3",
        name: "Otro Filtro",
        ops: [
          {
            op: "Verde",
            cant: 25
          },
          {
            op: "Azul",
            cant: 25
          },
          {
            op: "Naranja",
            cant: 25
          },
          {
            op: "Rojo",
            cant: 25
          },
          {
            op: "Purpura",
            cant: 25
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
