import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[]
  cartItem = []
  p
  subscription: Subscription
  cartCount: number = 0
  @Input() searchProduct
  @Output() cartCountEvent = new EventEmitter()
  constructor(@Inject(DOCUMENT) document, private productService: ProductService, private cartService: CartService) {
  }
  ngOnInit() {
    this.subscription = this.productService.productsChanged.subscribe(
      (product: Product[]) => {
        this.products = product

      }
    );
    this.products = this.productService.getProducts()
  }
  addToCart(item) {
    document.getElementById(item.id).innerHTML = "Added"
    var element = <HTMLInputElement>document.getElementById(item.id);
    element.disabled = true;
    // item.quantity = item.quantity - 1
    let productCopy = [...this.products];
    let updatedProduct = productCopy.filter((singleProduct) => {
      if (singleProduct.id === item.id) {
        singleProduct.quantity = singleProduct.quantity - 1;
      }

      return singleProduct;
    });
    this.productService.updateProduct(updatedProduct)
    console.log("update", this.products)

    this.cartService.addToCart(item);
    this.cartCount = this.cartService.getCartCount()
    this.cartCountEvent.emit(this.cartCount)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
