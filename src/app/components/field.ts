import { Component, input, model, output } from '@angular/core';
import type {
  DisabledReason,
  FormValueControl,
  ValidationError,
  WithOptionalFieldTree,
} from '@angular/forms/signals';

export type FieldType = 'text' | 'message' | 'email';

const baseTemplate = `
  class="border border-gray-300 rounded-sm shadow-xs px-4 py-2 mt-1"
  [attr.id]="fname()"
  [attr.name]="fname()"
  [attr.placeholder]="placeholder()"
  [value]="value()"
  (input)="valueChanged($event)"
  [disabled]="disabled()"
  [readonly]="readonly()"
  [class.invalid]="invalid()"
  [class.border-red-700]="touched() && invalid()"
  [attr.aria-invalid]="invalid()"
  (blur)="touch.emit()"
`;

@Component({
  selector: 'field',
  template: `
    <label class="capitalize" [attr.for]="fname()">{{ fname() }}</label>
    @if (type() === 'text' || type() === 'email') {
      <input
        ${baseTemplate}
        type="type()"
      />
    } @else if (type() === 'message') {
      <textarea
        ${baseTemplate}
        [attr.rows]="rows()"
      ></textarea>
    }

    <small
      class="text-red-700 text-right"
      [class.visible]="(touched() && invalid())"
      [class.invisible]="!(touched() && invalid())"
    >
      * {{ errors()?.[0]?.message }}
    </small>
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
  public type = input<FieldType>('text');
  public fname = input.required<string>();
  public placeholder = input<string>('Enter value...');

  // TEXTAREA
  public rows = input(4);

  protected valueChanged(ev: InputEvent) {
    const t = ev.target as HTMLInputElement;
    const v = t.value;

    this.value.set(v);
  }

  value = model('');
  touched = input<boolean>(false);
  touch = output<void>();
  disabled = input<boolean>(false);
  disabledReasons = input<readonly WithOptionalFieldTree<DisabledReason>[]>([]);
  readonly = input<boolean>(false);
  hidden = input<boolean>(false);
  invalid = input<boolean>(false);
  errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
}
