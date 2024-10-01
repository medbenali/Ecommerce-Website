import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { StorageService } from '../../_services/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  roles: string[] = [];

  role: string = '';



  constructor(private authService: AuthService,
              private storageService: StorageService,
              private _snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void 
  {
    if (this.storageService.isLoggedIn())
    {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit()
  {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        
        this.reloadPage();

        //this.navigateByRole();

        /*
        

        for(this.role of this.roles)
        {
          if(this.role == "ROLE_USER")
          {
            this.router.navigate(['/profile']);
          }

          else if (this.role == "ROLE_ADMIN")
          {

            this.router.navigate(['/admin']);

           
          
          }

          else 
          {
            this.router.navigate(['/'])
          }

        }

        */

        

        
        
      },

      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.errorSnackBar('There was an error sending your message!', 'X');
      }
    });
  }


  navigateByRole(): void {
    if (this.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/admin']).then(() => {
        window.location.reload(); 
      });
    } else if (this.roles.includes('ROLE_USER')) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/']);
    }
  }


  reloadPage(): void {
    window.location.reload();
  }

  errorSnackBar(message: string, type: string) { 
    this._snackBar.open('There was an error sending your message!', 'Close', {
      duration: 3000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top',
      horizontalPosition:'right'
    });
  }

}
