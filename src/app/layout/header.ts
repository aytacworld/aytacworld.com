import { Component, signal } from '@angular/core';
import { mdiClose, mdiMenu } from '@mdi/js';
import { Button } from '../components/button';
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
        <nav-item name="services" />
        <nav-item name="contact" />
        <btn (onClick)="book()">Book a consultation</btn>
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
            <nav-item name="services" (click)="menuToggle.set(false)" />
            <nav-item name="contact" (click)="menuToggle.set(false)" />
            <btn (onClick)="book()">Book a consultation</btn>
            <div class="grow" ></div>
          </nav>
        </div>
      }
    </div>
    `,
  imports: [Button, NavItem, Icon, logo],
  host: {
    '[class]': `[
      'static',
      'w-full',
      'flex',
      'justify-between',
      'items-center',
      'p-[.5rem]',
      'md:p-4',
      'md:pl-8',
    ]`,
  },
})
export class Header {
  protected readonly mdiClose = mdiClose;
  protected readonly mdiMenu = mdiMenu;

  protected menuToggle = signal(false);

  protected book(): void {
    this.menuToggle.set(false);
    console.log('hello');
  }
}
