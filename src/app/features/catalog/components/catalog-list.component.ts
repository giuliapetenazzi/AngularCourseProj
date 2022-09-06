import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { User } from '../../../model/user';

// ng g c features/catalog/components/catalog-list --flat

@Component({
  selector: 'hy-catalog-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <h2> Users catalog </h2>
      <ol>
        <li *ngFor="let u of users">
          {{u.name}}: {{u.address}}
          <button (click)="deleteUser.emit(u.id)">delete user</button>
        </li>
      </ol>
      {{render()}}
      `,
  styles: [
  ]
})
export class CatalogListComponent implements OnInit {

  @Input() users: User[] =  [];
  @Output() deleteUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  render() {
    console.log("🚀 ~ render");
  }

}
