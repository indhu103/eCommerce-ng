import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { CartService } from "../../cart/cart.service";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  public products: any;
  cartItem = [];
  p;
  subscription: Subscription;
  cartCount: number = 0;
  @Input() searchProduct;
  // @Output() cartCountEvent = new EventEmitter();
  constructor(
    // @Inject(DOCUMENT) document,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    this.products = this.productService.getProducts();


  }

  ngOnInit() {

    // this.getProducts()

  }
  getProducts() {
    // this.subscription = this.productService.productsChanged.subscribe(
    //   (product: Product[]) => {
    //     this.products = product;
    //   }
    // );
    this.products = this.productService.getProducts();
  }
  addToCart(item) {
    this.productService.updateProduct(item);
    this.subscription = this.productService.productsChanged.subscribe(
      (product: Product[]) => {
        this.products = product;
      }
    );
    document.getElementById(item.id).innerHTML = "Added";
    // var element = <HTMLInputElement>document.getElementById(item.id);
    // element.disabled = true;
    // let productCopy = [...this.products];
    this.cartService.addToCart(item);
    // this.cartCount = this.cartService.getCartCount();
    // this.cartCountEvent.emit(this.cartCount);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}




