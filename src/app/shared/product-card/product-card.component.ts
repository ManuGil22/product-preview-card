import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() productType!: string;
  @Input() cardTitle!: string;
  @Input() cardText!: string;
  @Input() productPrice!: string;
  @Input() productOldPrice!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
