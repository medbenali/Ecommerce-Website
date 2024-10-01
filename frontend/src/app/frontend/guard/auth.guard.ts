import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private storageService: StorageService, private router:Router){}


  canActivate(): boolean
  {
    return false;
  }

  //canActivate(): boolean
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //if(state.url ='/login')
    
    /*

    {
      if(this.storageService.isLoggedIn())
      {
        const userRoles = this.storageService.getUser().roles;
      
        if (userRoles.includes("ROLE_USER"))
        {
          this.router.navigate(['/profile']);
            
          return true;
        }

        else if (userRoles.includes("ROLE_ADMIN"))
        {
          this.router.navigate(['/admin'])

          return true;        
        }

     
     

        else 
        {
          this.router.navigate(['/login'])
          
          return false;
        }

       

        }

        else 
        {
          this.router.navigate(['/login'])
          
          return false;
        }

      }

      */

    }
    
 
