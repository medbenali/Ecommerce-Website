import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { StorageService } from '../../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private storageService: StorageService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
      this.logout();
  }


  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        //window.location.reload();

        this.router.navigate(['/']).then(() => {
          window.location.reload(); 
        });
        
      },
      error: err => {
        console.log(err);
      }
    });
  }


}
