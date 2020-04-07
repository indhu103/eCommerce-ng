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

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(item) {
    if (item.quantity == 1) {
      var index = this.cartItems.indexOf(item)
      if (index !== -1) this.cartItems.splice(index, 1);
    }
    else {
      this.updateQuantity(item)
    }
  }
  updateQuantity(item) {
    var price = item.price / item.quantity
    console.log(price)
    item.quantity = item.quantity - 1
    item.price = price * item.quantity
  }
  placeOrder() {
    this.details = !this.details

  }
  onSubmit() {
    this.cartService.getUserDetails(this.userModel)
    this.router.navigate(['/shipping', this.userModel])
  }

}
