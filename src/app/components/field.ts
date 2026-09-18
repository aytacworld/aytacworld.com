import { Component, input, InputSignal, InputSignalWithTransform, model, output } from '@angular/core';
import type { DisabledReason, FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';

export type FieldType = 'text' | 'message' | 'email';

@Component({
  selector: 'field',
  template: `
    <label class="capitalize" [attr.for]="fname()">{{ fname() }}</label>
    @if (type() === 'text' || type() === 'email') {
      <input
        class="border border-gray-300 rounded-sm shadow-xs px-4 py-2 mt-1"
        type="type()"
        [attr.id]="fname()"
        [attr.name]="fname()"
        [attr.placeholder]="placeholder()"
        [value]="value()"
        (input)="valueChanged($event)"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [class.invalid]="invalid()"
        [attr.aria-invalid]="invalid()"
        (blur)="touch.emit()"
      />
    } @else if (type() === 'message') {
      <textarea
        class="border border-gray-300 rounded-sm shadow-xs px-4 py-2 mt-1"
        [attr.id]="fname()"
        [attr.name]="fname()"
        [attr.placeholder]="placeholder()"
        [value]="value()"
        (input)="valueChanged($event)"
        [attr.rows]="rows()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [class.invalid]="invalid()"
        [attr.aria-invalid]="invalid()"
        (blur)="touch.emit()"
      ></textarea>
    }

    @if (touched() && invalid()) {
      @for (error of errors(); track error) {
        <span class="error">{{ error.message }}</span>
      }
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
  readonly = input<boolean>(false)
  hidden = input<boolean>(false)
  invalid = input<boolean>(false)
  errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
}
