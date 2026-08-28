import { Component } from '@angular/core';

@Component({
  selector: 't1',
  template: `
    <ng-content />
  `,
  imports: [],
  host: {
    '[class]': `[
      'flex',
      'text-3xl',
      'font-medium',
      'px-5',
      '-ml-3',
      'mt-[2rem]',
      'mb-[1rem]',
      'border-l-4',
      'border-primary-400',
      'hover:border-primary-500',
    ]`,
  },
})
export class Title {}
