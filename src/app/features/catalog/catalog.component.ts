import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { getLocaleCurrencyCode } from '@angular/common';
import { CatalogService } from './services/catalog.service';

@Component({
  selector: 'hy-catalog',
  template: `
    <h1>Users catalog</h1>

    <hy-catalog-form
      (save)="catalogService.save($event)"
    ></hy-catalog-form>

      <hy-catalog-list
        [users]="catalogService.users"
        (deleteUser)="catalogService.deleteUser($event)"
      >
      </hy-catalog-list>

  `,
  styles: [
  ]
})
export class CatalogComponent implements OnInit {

  //testUser: User = {id: 1, name: 'pippo', address: 'red street 2'};

  //users: User[] = [];

  constructor(private http: HttpClient, public catalogService: CatalogService) {
  }

  ngOnInit(): void {
    this.catalogService.getAll();
  }

}
