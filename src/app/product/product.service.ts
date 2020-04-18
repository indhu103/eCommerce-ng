import { Product } from "./product.model";
import { Subject } from "rxjs";
import { Input } from "@angular/core";
export class ProductService {
    productsChanged: Subject<Product[]> = new Subject<Product[]>();

    public products: Product[] = [
        new Product(1, "Realme 6 Pro", "This is product 1", 10, 16999, 5),
        new Product(
            2,
            "Xiaomi Redmi Note 9 Pro",
            "This is product 2",
            90,
            12999,
            5
        ),
        // new Product(3, "Realme 6", "This is product 3", 100, 12999, 5),
        // new Product(4, "Xiaomi Poco X2", "This is product 4", 30, 15999, 5),
        // new Product(5, "Vivo", "This is product 5", 0, 15999, 5),
        // new Product(6, "OPPO Reno3 Pro", "This is product 6", 2, 15999, 5),
        // new Product(7, "Lenovo", "This is product 7", 12, 17999, 5),
        // new Product(8, "Blackberry", "This is product 8", 3, 35999, 5),
        // new Product(9, "OPPO F11", "This is product 9", 20, 15999, 5),
        // new Product(10, "Micromax", "This is product 10", 40, 12999, 5),
        // new Product(11, "iPhone 11 Pro Max", "This is product 11", 10, 66999, 5),
        // new Product(12, "iPhone 7 Plus", "This is product 12", 10, 46999, 5),
        // new Product(13, "Honor 20 Lite ", "This is product 13", 10, 36999, 5),
        // new Product(14, "Motorola", "This is product 14", 10, 16999, 5),
        // new Product(15, "Samsung Galaxy A20e", "This is product 16", 10, 36999, 5),
        // new Product(17, "Honor 9X", "This is product 17", 45, 46999, 5),
        // new Product(18, "Samsung Galaxy A51", "This is product 18", 0, 26996, 5),
        // new Product(19, "Sony Xperia 1", "This is product 19", 1, 36999, 5),
        // new Product(20, "Nokia 1 Plus", "This is product 20", 10, 26999, 5),
    ];
    // products: Product[];
    getProducts() {
        // console.log(this.products.length);
        // if (this.products) {
        // }
        // this.products = JSON.parse(localStorage.getItem("my_products"));
        return this.products;
    }
    updateProduct(product) {
        // this.products.filter((singleProduct) => {
        //     if (singleProduct.id === product.id) {
        //         singleProduct.quantity = singleProduct.quantity - 1;
        //     }
        //     //return singleProduct;
        // });
        // this.products = JSON.parse(localStorage.getItem('my_products'))
        this.products.map((item, i) => {
            if (item.id == product.id) {
                this.products[i].quantity = this.products[i].quantity - 1;
            }
        });
        console.log(this.products)
        // this.productsChanged.next(this.products);

        // console.log("1updated pro", this.productsChanged, this.products);
        // localStorage.setItem("my_products", JSON.stringify(this.products));
        // console.log("2updated pro", this.productsChanged, this.products);
        // return this.productsChanged;
    }
}