import { Component, input, model } from '@angular/core';
import type { FormValueControl } from '@angular/forms/signals';

export type FieldType = 'input' | 'text';

@Component({
  selector: 'field',
  template: `
    <label class="capitalize" [attr.for]="name()">{{ name() }}</label>
    @if (type() === 'input') {
      <input
        class="border border-gray-300 rounded-sm shadow-xs px-4 py-2 mt-1"
        type="text"
        [attr.id]="name()"
        [attr.name]="name()"
        [attr.placeholder]="placeholder()"
        [value]="value()"
        (input)="valueChanged($event)"
      />
    } @else if (type() === 'text') {
      <textarea
        class="border border-gray-300 rounded-sm shadow-xs px-4 py-2 mt-1"
        [attr.id]="name()"
        [attr.name]="name()"
        [attr.placeholder]="placeholder()"
        [value]="value()"
        (input)="valueChanged($event)"
        [attr.rows]="rows()"
      ></textarea>
    }
  `,
  imports: [],
  host: {
    '[class]': `[
      'flex',
      'flex-col',
      'mb-2',
    ]`,
  },
})
export class Field implements FormValueControl<string> {
  public type = input<FieldType>('input');
  public name = input.required<string>();
  public placeholder = input<string>('Enter value...');

  // TEXTAREA
  public rows = input(4);

  protected valueChanged(ev: InputEvent) {
    const t = ev.target as HTMLInputElement;
    const v = t.value;

    this.value.set(v);
  }

  value = model('');
}
