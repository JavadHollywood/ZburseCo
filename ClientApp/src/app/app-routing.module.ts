import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AuthGuard } from './_guards/auth.guard';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path:'admin',
     runGuardsAndResolvers:'always',
     canActivate:[AuthGuard],
    children:[
      {path:'adminPanel',component:AdminPanelComponent,data:{roles:['Admin']}}
      
    ]
  },

  {path:'**',redirectTo:'home',pathMatch:'full'},
  
 
  

  // {
  //   path: 'admin',
  //   component: AdminPanelComponent,
  //   children: [
  //     {path: 'adminPanel', component: AdminPanelComponent}
  //   ]
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
