import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router'
import { User } from './user.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  products
  details = false;
  userModel = new User('John Doe', 'xxx street', 'Coimbatore', 'TN', '123456', 9576757875)
  cartCount: number
  constructor(private cartService: CartService,
    private location: Location, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.products = this.productService.getProducts()
    this.cartCount = this.cartService.getCartCount()
  }


  removeItem(item) {
    this.cartCount = this.cartService.removeItem(item);
  }

  placeOrder() {
    this.details = !this.details
  }
  getOriginalPrice(item) {
    for (let i = 0; i < this.products.length; i++) {
      if (item.id === this.products[i].id)
        return this.products[i].price
    }
  }
  updatePrice(event, cartItem) {
    let price = this.getOriginalPrice(cartItem)
    cartItem.price = price * event.target.value
    cartItem.quantity = event.target.value

  }
  continue() {
    this.location.back();

  }


  onSubmit() {
    this.cartService.getUserDetails(this.userModel)
    this.router.navigate(['/shipping', this.userModel])
  }
}
