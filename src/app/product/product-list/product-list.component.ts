import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[]
  cartItem = []
  cartCount: number = 0
  @Input() searchProduct
  @Output() cartCountEvent = new EventEmitter()
  constructor(private productService: ProductService, private cartService: CartService) {
  }
  ngOnInit() {
    this.products = this.productService.getProducts()
  }

  addToCart(item) {
    this.cartService.addToCart(item);
    this.cartCount = this.cartService.getCartCount()
    this.cartCountEvent.emit(this.cartCount)

  }


}
