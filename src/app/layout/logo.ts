import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'logo',
  template: `
    <img ngSrc="./banner-new.svg"
        priority width="178" height="36"
        [routerLink]="link()"
        class="cursor-pointer"
        [class.invert-50]="invert()"
    />
  `,
  imports: [RouterLink, NgOptimizedImage],
})
export class logo {
  public link = input('');
  public invert = input(false, { transform: booleanAttribute });
}
