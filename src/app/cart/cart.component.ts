import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router'
import { User } from './user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  details = false;
  userModel = new User('John Doe', 'xxx street', 'Coimbatore', 'TN', '123456', 9576757875)
  cartCount: number
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartCount = this.cartService.getCartCount()

  }

  removeItem(item) {
    this.cartService.removeItem(item);
    this.cartCount = this.cartService.getCartCount()

  }

  placeOrder() {
    this.details = !this.details

  }
  onSubmit() {
    this.cartService.getUserDetails(this.userModel)
    this.router.navigate(['/shipping', this.userModel])
  }

}
