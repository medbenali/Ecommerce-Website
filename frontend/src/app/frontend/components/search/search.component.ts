import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private router: Router) {}


  key: string = "";

  doSearch(key: string)
  {
    console.log("Search for " + key);
    this.router.navigateByUrl(`/search/${key}`);
    


  }

}
