import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'icon',
  template: `
    <svg version="1.1"
       viewBox="0 0 24 24"
       style="display:inline-block;width:{{size()}}"
       [class.animate-spin]="animateSpin()"
    >
       <path [attr.d]="path()" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
    </svg>
  `,
})
export class Icon {
  public path = input.required<string>();
  public size = input<string>('1.5rem');
  public animateSpin = input(false, { transform: booleanAttribute });
}
