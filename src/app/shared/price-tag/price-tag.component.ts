import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrls: ['./price-tag.component.scss']
})
export class PriceTagComponent implements OnInit {
  @Input() newPrice!: string;  
  @Input() oldPrice!: string;  
  
  constructor() { }

  ngOnInit(): void {
    if (!this.oldPrice) {
      let element = document.getElementsByClassName("old-price")[0];
      element.classList.add("hidden");
    }
  }

}
