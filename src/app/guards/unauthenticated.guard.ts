import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthenticatedGuard implements CanActivate {
  
  constructor(private secService: SecurityService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.secService.sessionExist()) {
      this.router.navigate(["/home"]);
      return false;
    }else{
      return true;
    }
    
  }
  
}
