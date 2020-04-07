import { Product } from "./product.model";
import { Observable, of } from 'rxjs';
export class ProductService {
    private products: Product[] = [
        new Product(1, "Realme 6 Pro", "This is product 1", 10, 16999, 5),
        new Product(2, "Xiaomi Redmi Note 9 Pro", "This is product 2", 90, 12999, 5),
        new Product(3, "Realme 6", "This is product 3", 100, 12999, 5),
        new Product(4, "Xiaomi Poco X2", "This is product 4", 30, 15999, 5),
        new Product(5, "OPPO Reno3 Pro", "This is product 5", 0, 15999, 5)
    ];

    getProducts() {
        return this.products.slice()

    }

}