import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filter: any;

  constructor() { }

  ngOnInit(): void {
  }

}
