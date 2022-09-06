import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatalogListComponent } from './features/catalog/components/catalog-list.component';
import { CatalogFormComponent } from './features/catalog/components/catalog-form.component';
import { CatalogListItemComponent } from './features/catalog/components/catalog-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    ContactsComponent,
    CatalogListComponent,
    CatalogFormComponent,
    CatalogListItemComponent
  ],
  imports: [
    BrowserModule, //for ngIf and ngFor
    //AppRoutingModule
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
