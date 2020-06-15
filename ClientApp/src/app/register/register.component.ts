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
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
  }
 // , { validator: this.passwordMatchValidator }
  );
  }
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('rePassword').value ? null : { 'mismatch': true };
  }
  register(){
    if(this.registerForm.valid){
      if (this.registerForm.get('password').value!=this.registerForm.get('rePassword').value){
        this.alertify.error('Password not match!');
        return;
      }
      this.user=Object.assign({},this.registerForm.value);
      
      this.authService.register(this.user).subscribe(next=>{
        this.alertify.success("register success");
       },error=>{
         console.log(error);
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
