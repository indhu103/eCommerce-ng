import { Injectable } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: any = [];
    loaded = []
    quantity: number
    userDetails
    constructor() { }
    addToCart(item) {
        if (!this.loaded.includes(item.id)) {
            this.loaded.push(item.id)
            this.cartItems.push(item)
        }
    }
    getCartCount() {
        return this.cartItems.length
    }
    getItems() {
        return this.cartItems;
    }
    removeItem(item) {
        var index = this.cartItems.indexOf(item)
        if (index !== -1) this.cartItems.splice(index, 1);
        return this.cartItems.length
    }
    getUserDetails(user) {
        this.userDetails = user
    }
    getTotalPrice() {
        var totalPrice = 0
        for (var i = 0; i < this.cartItems.length; i++) {
            totalPrice = totalPrice + this.cartItems[i].price
        }
        return totalPrice
    }
    getDetails() {
        return this.userDetails
    }
    clearCart() {
        this.cartItems = [];
        return this.cartItems;
    }

}
