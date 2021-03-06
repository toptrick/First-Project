import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';

const routes: Routes = [

  {path:'list-todos', component:ListTodoComponent, canActivate:[RouteGaurdService]},
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent,canActivate:[RouteGaurdService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGaurdService]},
  {path:'**', component:ErrorComponent,canActivate:[RouteGaurdService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
