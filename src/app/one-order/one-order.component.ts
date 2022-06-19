import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-one-order',
  templateUrl: './one-order.component.html',
  styleUrls: ['./one-order.component.css']
})
export class OneOrderComponent implements OnInit {
@Input() cart:any
 user:any
  constructor(private userService:UsersService,
    private cartService:CartsService) { }

  ngOnInit(): void {
   this.userService.getUserById(this.cart.userId).subscribe(
    user=>{this.user=user}  
   )
  }
  validate(){
    this.cartService.deleteCart(this.cart._id).subscribe(
      (res)=>location.reload()
    )
  }

}
