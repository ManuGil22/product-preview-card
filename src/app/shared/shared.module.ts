import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { PriceTagComponent } from './price-tag/price-tag.component';
import { AddToCartBtnComponent } from './add-to-cart-btn/add-to-cart-btn.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    PriceTagComponent,
    AddToCartBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule { }
