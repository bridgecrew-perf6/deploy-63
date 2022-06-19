import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm:any=FormGroup;
  constructor(private fb:FormBuilder,
              private userService:UsersService ,
              private router:Router
               ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email:['',[
        Validators.required,
        Validators.email
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]],
      userName:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      adress:['',[
        Validators.required
      ]],
      phoneNumber:['',[
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(8),
      ]],
      role:"user"
    })
  }
  signup(user: any) {
      this.userService.signup(user).subscribe(
        (data) => {
          this.router.navigate(['login']).then(()=>{location.reload()})          
        }
      )
    
  }
}
