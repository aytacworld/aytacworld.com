import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer';
import { Header } from './layout/header';

@Component({
  selector: 'app-root',
  template: `
    <app-header />

    <main class="pl-8 pb-8 max-w-[1200px]">
      <router-outlet />
    </main>

    <app-footer class="grow" />
  `,
  imports: [RouterOutlet, Header, Footer],
  host: {
    '[class]': `[
      'h-screen',
      'flex',
      'flex-col',
    ]`,
  },
})
export class App {}
