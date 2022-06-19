import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  user:any
  constructor(private userService:UsersService) { }

  ngOnInit() {
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

}
