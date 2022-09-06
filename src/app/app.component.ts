import { Page } from './model/page';
import { Component } from '@angular/core';

@Component({
  selector: 'hy-root',
  template: `
  <div [ngSwitch]="section">
    <button routerLink = 'home'>home</button>
    <button routerLink = 'catalog'>catalog</button>
    <button routerLink = 'contacts'>contacts</button>
  </div>
  <!--
    <hy-home *ngSwitchCase="'home'"></hy-home>
    <hy-catalog *ngSwitchCase="'catalog'"></hy-catalog>
    <hy-contacts *ngSwitchCase="'contacts'"></hy-contacts>
  -->
  <router-outlet></router-outlet>
  `,
  styles: []

})

  //index.html is something to configure in the server side when you deploy and go live
  //<base href="/"> in index.html is something to change in case of build e release in subfolders

export class AppComponent {
  section: Page | null = null;
}
