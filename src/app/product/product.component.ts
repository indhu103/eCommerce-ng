import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  cartCount
  searchProduct: string
  public productId
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.productId = id
  }
  onClick() {
    this.router.navigate(['/cart'])
  }





}
