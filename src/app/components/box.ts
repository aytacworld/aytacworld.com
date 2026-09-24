import { Component } from '@angular/core';

@Component({
  selector: 'box',
  template: `
    <ng-content />
  `,
  imports: [],
  host: {
    '[class]': `[
      'flex',
      'flex-col',
      'border',
      'border-gray-100',
      'rounded-md',
      'shadow-md',
      'p-4',
    ]`,
  },
})
export class Box {}
