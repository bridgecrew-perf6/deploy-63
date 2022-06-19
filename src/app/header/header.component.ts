import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UsersService,
              private router:Router  ) { }
  user:any
  connected:boolean=false
  ngOnInit(): void {
    // @ts-ignore
    if(JSON.parse(localStorage.getItem('loged'))){
      // @ts-ignore
      this.userService.login(JSON.parse(localStorage.getItem('loged'))).subscribe(
        user=>{
          this.user=user
          if(user){
            this.connected=true
          }
          else{
            this.connected=false
          }
        }
      )
    }    
  }

  logout(){
    localStorage.removeItem("loged")
    localStorage.removeItem('cart')
    this.router.navigate(["home"]).then(()=>{location.reload()})
  }
  
}
