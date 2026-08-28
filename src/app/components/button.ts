import { Component, input, output } from '@angular/core';

@Component({
  selector: 'btn',
  template: `<ng-content />`,
  host: {
    '(click)': 'onClick.emit($event)',
    '[class]': `[
      'text-center',
      'block',
      'bg-primary-400',
      'hover:bg-primary-500',
      'active:bg-primary-600',
      'text-white',
      'rounded-md',
      'cursor-pointer',
      'content-center',
      'shadow-lg',
      'px-[12px]',
      'py-[8px]',
    ]`,
  },
})
export class Button {
  public type = input<string>();
  public onClick = output<MouseEvent>();
}
