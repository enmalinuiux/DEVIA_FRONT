import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'StoreFilter',
  templateUrl: './store-filter.component.html',
  styleUrls: ['./store-filter.component.scss']
})
export class StoreFilterComponent implements OnInit {

  @Input() filter: any;

  constructor() { }

  ngOnInit(): void {
  }

}
