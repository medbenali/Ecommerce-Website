import { Component } from '@angular/core';
import { StorageService } from './frontend/_services/storage.service';
import { AuthService } from './frontend/_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  

  private roles: string[] = [];

  isLoggedIn = false;

  username?: string;

  constructor(private storageService: StorageService, 
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      if(this.roles.includes('ROLE_ADMIN'))
      {
        this.router.navigate(['/admin']);
      }
    
      else if(this.roles.includes('ROLE_USER'))
      {
        this.router.navigate(['/profile']);
      }

    
      else 
      {
      this.router.navigate(['/']);
      }

      this.username = user.username;
    }
  }




  
  



}
