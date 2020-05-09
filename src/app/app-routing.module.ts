import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from '../app/userdetails/userdetails.component';
const routes: Routes = [{path: 'dashboard' , component: DashboardComponent},
{path: 'mani', component: LoginComponent,
children: [{ path: 'user', component: UserdetailsComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
