import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:any
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
     // @ts-ignore
     if(JSON.parse(localStorage.getItem('loged'))){
      // @ts-ignore
      this.userService.login(JSON.parse(localStorage.getItem('loged'))).subscribe(
        user=>{
          this.user=user
        }
      )
    }
  }

  cartNumber(){
    // @ts-ignore
    if(JSON.parse(localStorage.getItem('cart'))){
      // @ts-ignore
    return JSON.parse(localStorage.getItem('cart')).products.length
    }
    else return 0
  }

}
