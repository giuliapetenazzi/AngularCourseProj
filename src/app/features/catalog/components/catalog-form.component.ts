import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hy-catalog-form',
  template: `
    <form #f="ngForm" (submit)="save.emit(f.value)">
      <input type="text" name="name" ngModel required minlength="3">
      <input type="text" name="address" ngModel required>
      <button type="submit"
              [disabled]="f.invalid">ADD</button>
    </form>

  `,
  styles: [
  ]
})
export class CatalogFormComponent {
  @Output() save = new EventEmitter<NgForm>();
}

