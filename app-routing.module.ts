import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  {path:"",redirectTo:"UserList",pathMatch:"full"},
{path:"UserDetails/:id",component:UserDetailsComponent},
{path:"UserList" , component:UserListComponent},
{path:"home",component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
