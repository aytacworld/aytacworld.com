import { Component, signal } from '@angular/core';
import { mdiClose, mdiMenu } from '@mdi/js';
import { Icon } from '../components/icon';
import { logo } from './logo';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-header',
  template: `
    <logo />
    <div class="hidden md:block">
      <nav class="flex gap-8">
        <nav-item name="about" />
        <nav-item name="contact" />
      </nav>
    </div>
    <div class="md:hidden">
      <icon
        [path]="menuToggle() ? mdiClose : mdiMenu"
        size="2rem" class="stroke-secondary-500 fill-secondary-500"
        (click)="menuToggle.set(!menuToggle())"
      />
      @if (menuToggle()) {
        <div class="absolute left-0 top-[52px] h-[calc(100vh-52px)] w-full bg-white z-999">
          <nav class="flex flex-col gap-6 p-6 pt-6 h-full">
            <nav-item name="about" (click)="menuToggle.set(false)" />
            <nav-item name="contact" (click)="menuToggle.set(false)" />
            <div class="grow" ></div>
          </nav>
        </div>
      }
    </div>
    `,
  imports: [NavItem, Icon, logo],
  host: {
    '[class]': `[
      'w-full',
      'flex',
      'justify-between',
      'items-center',
      'p-[.5rem]',
      'pl-8',
      'bg-white',
      menuToggle() ? 'fixed' : 'static',
      menuToggle() ? 'z-999' : '',
      'md:static',
    ]`,
  },
})
export class Header {
  protected readonly mdiClose = mdiClose;
  protected readonly mdiMenu = mdiMenu;

  protected menuToggle = signal(false);
}
