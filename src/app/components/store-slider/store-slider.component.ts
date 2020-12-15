import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'StoreSlider',
  templateUrl: './store-slider.component.html',
  styleUrls: ['./store-slider.component.scss']
})
export class StoreSliderComponent implements OnInit {

  images = [944, 1021, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
    
  }

}
