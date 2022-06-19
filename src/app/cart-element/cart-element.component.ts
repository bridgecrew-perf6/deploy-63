import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.css']
})
export class CartElementComponent implements OnInit {

 
  @Input() p: any
  @Input() delete:any
  @Input() up:any

  cart: any = {};
 
  constructor(private cartsService: CartsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
     
  }
  add() {
    console.log(this.p);
    
    if (this.p.quantity < this.p.stock) {
    this.p.quantity++
    // @ts-ignore
    if(JSON.parse(localStorage.getItem('cart'))){
      // @ts-ignore
          let temp:any=JSON.parse(localStorage.getItem('cart')).products
          temp.map((e:any)=>{
            e._id===this.p._id?e.quantity++:e.quantity
          })
          localStorage.setItem('cart',JSON.stringify({products:temp}))
          this.up()  
    }
    
  }
  }
  sub() {
    if (this.p.quantity > 1) {
      this.p.quantity--
      this.up()
      // @ts-ignore
    if(JSON.parse(localStorage.getItem('cart'))){
      // @ts-ignore
          let temp:any=JSON.parse(localStorage.getItem('cart')).products
          temp.map((e:any)=>{
            e._id===this.p._id?e.quantity--:e.quantity
          })
          localStorage.setItem('cart',JSON.stringify({products:temp}))
          this.up()  
    }
    }
  }
  
 

}
