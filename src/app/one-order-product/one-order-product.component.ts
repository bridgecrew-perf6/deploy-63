import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-one-order-product',
  templateUrl: './one-order-product.component.html',
  styleUrls: ['./one-order-product.component.css']
})
export class OneOrderProductComponent implements OnInit {
@Input() product:any
prod:any
  constructor(private productService:ProductsService ) { }

  ngOnInit(): void {
    this.productService.getProductById(this.product.productId).subscribe(
      (product:any)=>{
        this.prod=product.data
      }
    ) 
  }
  

}
