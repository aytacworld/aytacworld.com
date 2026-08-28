import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-item',
  template: `<a [routerLink]="route() || name()">{{ name() }}</a>`,
  imports: [RouterLink],
  host: {
    '[class]': `[
      'flex',
      'justify-center',
      'items-center',
      'hover:underline',
      'capitalize',
      'border',
      'rounded-sm',
      'p-2',
      'md:border-0',
      'md:p-0',
    ]`,
  },
})
export class NavItem {
  public name = input.required<string>();
  public route = input<string>();
}
