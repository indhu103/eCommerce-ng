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
    removeItem(item) {
        if (item.quantity == 1) {
            var index = this.cartItems.indexOf(item)
            if (index !== -1) this.cartItems.splice(index, 1);
        }
        else {
            this.updateQuantity(item)
        }
        // this.cartCount = this.cartCount - 1
    }

    updateQuantity(item) {
        var price = item.price / item.quantity
        item.quantity = item.quantity - 1
        item.price = price * item.quantity
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
