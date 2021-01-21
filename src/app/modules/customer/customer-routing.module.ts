import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UnauthenticatedGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
