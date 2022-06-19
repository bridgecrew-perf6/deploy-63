import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css'],
})
export class AdminAddProductComponent {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  selectedCat: string = '';

  selectedHandler(event: any) {
    this.selectedCat = event.target.value;
  }

  createProduct(product: {
    productName: string;
    price: number;
    stock: number;
    imageUrl: string;
    description: string;
    category: string;
    brand: string;
  }) {
    console.log(product);
    product.category = this.selectedCat;

    this.productService.addProduct(product).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/adminview']);
  }
}
