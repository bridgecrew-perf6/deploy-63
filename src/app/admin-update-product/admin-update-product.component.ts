import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css'],
})
export class AdminUpdateProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}
  currentProd: any;
  productId: any;
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('_id');
    this.productService.getProductById(this.productId).subscribe((data) => {
      this.currentProd = data;
      console.log(data, 'update');
      console.log(this.currentProd);
    });
  }
  updateProduct(product: {
    productName: string;
    price: number;
    stock: number;
    imageUrl: string;
    description: string;
    _id: string;
  }) {
    console.log(product);
    product._id = this.productId;

    this.productService.editProduct(product).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/adminview']);
  }

  test() {
    console.log(this.currentProd, 'currentProd');
    console.log(this.productId, 'prodId');
  }
}
