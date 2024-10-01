import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent 
{
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  constructor(private contactService: ContactService,
              private _snackBar: MatSnackBar,
              private router:Router){}

  addContact()
  {

    //console.log('Add contact');

    const data = {
      name: this.contact.name,
      email: this.contact.email,
      subject: this.contact.subject,
      message: this.contact.message
    };

    this.contactService.addContact(data)
        .subscribe({
          next: (res) =>
          {
            console.log(res);
            this.openSnackBar('Your message was successfully sent!', 'X');

            /*

            this.router.navigate(['/']).then(() => {
              window.location.reload(); 
            });

            */

            this.router.navigate(['/']);
            
          },
          error: (e) => console.error(e)
        });
  }

  openSnackBar(message: string, type: string) { 
    this._snackBar.open('Your message was successfully sent!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top',
      horizontalPosition:'right'
    });
  }


}
