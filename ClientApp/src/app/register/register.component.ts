import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user:any;
  constructor(private formBuilder: FormBuilder , private authService:AuthService
    ,private alertify:AlertifyService, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  register(){
    if(this.registerForm.valid){
      this.user=Object.assign({},this.registerForm.value);
      console.log(this.user);
      this.authService.register(this.user).subscribe(next=>{
        this.alertify.success("register success");
       },error=>{
         this.alertify.error(error);
       },()=>{
         this.authService.login(this.user).subscribe(()=>{
           this.router.navigate(['/home']);
         });
       }
       );
    }
  }
}
