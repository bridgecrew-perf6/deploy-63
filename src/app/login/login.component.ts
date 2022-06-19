import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any=FormGroup;
  constructor(private fb:FormBuilder,
              private userService:UsersService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[
        Validators.required,
        Validators.email
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]]
    })
  }
  login(user: any) {
    this.userService.login(user).subscribe(
      (data) => {
        localStorage.setItem("loged",JSON.stringify(data))
        this.router.navigate(['home']).then(()=>{location.reload()})
        
        
      }
    )
  
}

}
