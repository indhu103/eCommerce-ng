import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems: any = [];
    loaded = []
    userDetails
    constructor() { }
    addToCart(item) {
        var items: any = []
        if (!this.loaded.includes(item.id)) {
            this.loaded.push(item.id)
            items.id = item.id
            items.name = item.name
            items.description = item.description
            items.price = item.price
            items.quantity = 1
            this.cartItems.push(items)
        }
        else {
            for (var i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].id == item.id) {
                    this.cartItems[i] = this.updateCartItems(this.cartItems[i], item.price)
                }
            }
        }
    }

    updateCartItems(updateItem, price) {
        updateItem.quantity = updateItem.quantity + 1
        updateItem.price = price * updateItem.quantity
        return updateItem
    }

    getItems() {
        return this.cartItems;
    }
    getCartCount() {
        var count = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            count = count + this.cartItems[i].quantity
        }
        return count

    }
    getUserDetails(user) {

        this.userDetails = user
    }
    getDetails() {
        return this.userDetails
    }
    clearCart() {
        this.cartItems = [];
        return this.cartItems;
    }

}
