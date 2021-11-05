import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup=new FormGroup({
  'email':new FormControl(null,[Validators.required,Validators.email]),
  'password':new FormControl(null,[Validators.required])
})
submitLoginForm(){
  if(this.loginForm.invalid)
{
  return;
}
this._AuthService.signIn(this.loginForm.value).subscribe((response)=>{
  if(response.message=='success'){
    localStorage.setItem('token',response.token)
    this.toastr.success('you are loggedin now');

this._Router.navigateByUrl('/home');
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
