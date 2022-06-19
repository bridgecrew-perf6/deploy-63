import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userInfo:any
  updateForm:any=FormGroup;
  constructor(private userService:UsersService,
                private fb:FormBuilder) { }

  ngOnInit(): void {
    this.updateForm=this.fb.group({
      
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
      ]]
      
    })
      // @ts-ignore
    if(JSON.parse(localStorage.getItem('loged'))){
      // @ts-ignore
      this.userService.login(JSON.parse(localStorage.getItem('loged'))).subscribe(
        (user:any)=>{
          this.userService.getUserById(user.id).subscribe((data)=>{
            this.userInfo=data
          })
        }
      )
    }   
  }

  update(newInfo:any){
    let temp:any=newInfo
    temp.phoneNumber=Number(temp.phoneNumber)
    temp._id=this.userInfo._id 
    console.log(temp);
       
    this.userService.editUser(temp).subscribe(
      (res)=>{location.reload()}
    )
  }

}
