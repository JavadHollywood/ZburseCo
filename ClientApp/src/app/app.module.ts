import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AdminService } from './_services/admin.service';
import { JwtModule } from '@auth0/angular-jwt';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';
import { CommonModule } from '@angular/common';
import {TabsModule} from 'ngx-bootstrap/tabs';


export function tokenGetter(){
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      AdminPanelComponent,
      HasRoleDirective,
      UserManagementComponent,
      PhotoManagementComponent,
      RolesModalComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      TabsModule.forRoot(),
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      ModalModule.forRoot(),
      BrowserAnimationsModule,
      AppRoutingModule,
      JwtModule.forRoot({
         config:{
            tokenGetter :tokenGetter,
            whitelistedDomains:['localhost:5000'],
            blacklistedRoutes:['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      AlertifyService,
      AuthGuard,
      AdminService

   ],
   entryComponents:[
      RolesModalComponent
   ],
   bootstrap: [
      AppComponent
   ] 
  
})
export class AppModule { }
