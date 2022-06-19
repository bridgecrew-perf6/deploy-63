import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  @Input() connected: boolean = false
  @Input() user: any

  constructor(private router: Router,private productService: ProductsService, private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.productService.getProductById(this.route.snapshot.paramMap.get("id") || "").subscribe(
      (product: any) => {
        this.product = product.data;
      }
    )

    this.logged()
  }
  addToCart(prod: any) {
    if (this.connected) {
      let test = false
      // @ts-ignore
      if (JSON.parse(localStorage.getItem('cart'))) {
        let storage: any = JSON.parse(localStorage.getItem('cart') || "")
        for (let i = 0; i < storage.products.length; i++) {
          if (storage.products[i]._id === prod._id) {
            storage.products[i].quantity++
            test = true
            break
          }
        }
        prod.quantity = 1
        !test ? storage.products.push(prod) : storage.products
        localStorage.setItem('cart', JSON.stringify({ products: storage.products }))
      }
      else {
        prod.quantity = 1
        localStorage.setItem('cart', JSON.stringify({ products: [prod] }))
      }   
    }
    else{
      this.router.navigate(['login'])
    }

    

  }

  logged() {
    // @ts-ignore
    if (JSON.parse(localStorage.getItem('loged'))) {
      // @ts-ignore
      this.userService.login(JSON.parse(localStorage.getItem('loged'))).subscribe(
        (user: any) => {
          this.user = user
          if (user) {
            this.connected = true
            console.log(this.connected)
          }
          else {
            this.connected = false
          }
        }
      )

    }
  }

}