import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = 
  {
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';



  constructor(private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router:Router){}


  ngOnInit(): void {
  }

  onSubmit()
  {
    //console.log("submit");

    const { username, email, password} = this.form;

    this.authService.register(username,email,password).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.successSnackBar('Your message was successfully sent!', 'X');
        this.router.navigate(['/']);
      },

      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.errorSnackBar('There was an error sending your message!', 'X');
      }

    });



  }

  successSnackBar(message: string, type: string) { 
    this._snackBar.open('Your message was successfully sent!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top',
      horizontalPosition:'right'
    });
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
