import { NgModule } from '@angular/core';


import { BackendRoutingModule } from './backend-routing.module';
import { SupportComponent } from './components/support/support.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    DashboardComponent,
    SupportComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    BackendRoutingModule
  ]
})
export class BackendModule {

  constructor() {
    document.body.setAttribute('data-ma-header', 'teal');

    this.removeHeader();

    this.removeFooter();

    this.loadBackendStylesAndScripts();
    
        this.loadScripts([
      'assets/backend/js/jquery-1.10.2.min.js',
      'assets/backend/js/jquery.min.js"',
      'assets/backend/js/bootstrap.min.js',
      'assets/backend/js/jquery.mCustomScrollbar.concat.min.js',
      'assets/backend/js/waves.min.js',
      'assets/backend/js/bootstrap-growl.min.js',
      'assets/backend/js/moment.min.js',
      'assets/backend/js/fullcalendar.min.js',
      'assets/backend/js/jquery.simpleWeather.min.js',
      'assets/backend/js/salvattore.min.js',
      'assets/backend/js/jquery.flot.js',
      'assets/backend/js/jquery.flot.resize.js',
      'assets/backend/js/curvedLines.js',
      'assets/backend/js/jquery.sparkline.min.js',
      'assets/backend/js/jquery.easypiechart.min.js',
      'assets/backend/js/curved-line-chart.js',
      'assets/backend/js/line-chart.js',
      'assets/backend/js/bootstrap-select.js',
      'assets/backend/js/fileinput.min.js',
      'assets/backend/js/chosen.jquery.min.js',
      'assets/backend/js/charts.js',
      'assets/backend/js/functions.js',
      'assets/backend/js/actions.js',
      'assets/backend/js/demo.js',
      'assets/backend/js/app.js'
      
    
  




    ]);

    




  }

  // Method to load styles and scripts dynamically
  loadBackendStylesAndScripts() {
    const head = document.getElementsByTagName('head')[0];

    

    // Load CSS files
    const styles = [
      'assets/backend/css/fullcalendar.min.css',
      'assets/backend/css/animate.min.css',
      'assets/backend/css/material-design-iconic-font.min.css',
      'assets/backend/css/jquery.mCustomScrollbar.min.css',
      'assets/backend/css/palette.css',
      'assets/backend/css/app.min.1.css',
      'assets/backend/css/app.min.2.css'
    ];

    styles.forEach(href => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = href;
      head.appendChild(linkElement);
    });

    // Load JS files
    const script = document.createElement('script');
    script.src = '//code.jquery.com/jquery-1.10.2.min.js';

    document.body.appendChild(script);



  }

  removeHeader() {


    const headerElement = document.querySelector('header');  // Finds the header element
    if (headerElement) {
      headerElement.remove();  // Removes the header from the DOM
    }

  }

  removeFooter() {


    const FooterElement = document.querySelector('footer');  // Finds the header element
    if (FooterElement) {
      FooterElement.remove();  // Removes the header from the DOM
    }

  }

  loadScripts(scripts: string[]) {
    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true; // Ensure asynchronous loading of scripts
      document.body.appendChild(script);
    });
  }



}
