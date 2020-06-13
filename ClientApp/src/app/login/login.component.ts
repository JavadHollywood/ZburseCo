import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private authService:AuthService 
    , private alertify:AlertifyService , private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(next=>{
     this.alertify.success("login success");
     this.router.navigate(['/home']);
    },error=>{
     this.alertify.error(error);
    });
  }

}
