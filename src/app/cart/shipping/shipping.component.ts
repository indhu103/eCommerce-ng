import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  userDetails: any
  cartItems: any
  public totalPrice
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.userDetails = this.cartService.getDetails()
    this.cartItems = this.cartService.getItems()
    this.totalPrice = this.cartService.getTotalPrice()
  }

}
