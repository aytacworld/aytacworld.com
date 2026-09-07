import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer';
import { Header } from './layout/header';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex justify-center">
       <app-header class="max-w-[1280px]" />
    </div>

    <div class="flex justify-center">
      <main class="px-8 md:pr-0 pb-8 max-w-[1280px] w-full">
        <router-outlet />
      </main>
    </div>

    <div class="grow flex justify-center bg-primary-400">
      <app-footer class="max-w-[1280px]" />
    </div>
  `,
  imports: [RouterOutlet, Header, Footer],
  host: {
    '[class]': `[
      'h-screen',
      'w-screen',
      'flex',
      'flex-col',
    ]`,
  },
})
export class App {}
