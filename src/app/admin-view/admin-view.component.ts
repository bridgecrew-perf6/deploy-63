import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent implements OnInit {
  allProducts: any;
  editedProd: any;
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      console.log(data, 'get');
    });
  }
  deleteProd(id: string) {
    this.productService.deleteProduct(id).subscribe((res) => {
      console.log(res);
    });
    this.ngOnInit();
  }

  editProdNav(id: any) {
    this.productService.getProductById(id).subscribe((data) => {
      this.editedProd = data;
      console.log(this.editedProd, 'edit');
      console.log(id, 'id');
    });
    this.router.navigate([`/updateproduct/${id}`]);

    // @Input() product = this.editedProd
  }
}
