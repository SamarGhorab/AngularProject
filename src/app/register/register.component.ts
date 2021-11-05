import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(7)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(7)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required])

  })
  submitRegisterForm(){
    if(this.registerForm.invalid){
      return;
    }
    this._AuthService.signUp(this.registerForm.value).subscribe((response)=>{

      console.log(response.message)
    if(response.message=='success'){
      
        this.toastr.success('you are registered now');
      
      this._Router.navigateByUrl('/login')
    
      }
      else{
        alert(response.message)
      }

    })
  }

  constructor(private _AuthService:AuthService,private _Router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
