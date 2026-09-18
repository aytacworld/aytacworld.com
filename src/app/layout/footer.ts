import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { logo } from './logo';

@Component({
  selector: 'app-footer',
  template: `
    <div class="grid grid-cols-1 md:grid-cols-5">
      <div class="md:col-span-2 flex flex-col items-center md:block">
        <logo invert size="sm" />
        <p class="mt-[1rem] text-center md:text-left">
          We solve complex challenges, optimize operations, and unlock
          sustainable growth.
        </p>
      </div>

      <div class="md:col-start-4 text-center md:text-left md:pl-[3rem]
                  flex flex-col gap-2 mt-[1.5rem] md:mt-0">
        <b class="pb-2">Company</b>
        <a routerLink="/about">About</a>
        <a routerLink="/contact">Contact</a>
      </div>

      <div class="text-center md:text-left md:pl-[3rem] flex flex-col
                  gap-2 mt-[1.5rem] md:mt-0">
        <b class="pb-2">Contact</b>
        <a href="mailto:info@aytacworld.com">info@aytacworld.com</a>
        <a href="https://osm.org/go/0EoZds5YE--?m=">
          Artur Maesstraat 100/307, 1130 Brussel, Belgium
        </a>
        <span>BE0785.854.606</span>
      </div>
    </div>

    <p class="border-t border-gray-300 text-center text-sm md:col-span-5
              pt-2 mt-5 flex flex-col md:block">
      <span>&#169; 2026 Aytacworld. All rights reserved.</span>
      <a routerLink="/privacy" class="text-secondary-600 md:pl-[2.5rem]">
        Privacy Policy
      </a>
      <a routerLink="/terms" class="text-secondary-600 md:pl-[2.5rem]">
        Terms of Service
      </a>
    </p>
  `,
  imports: [logo, RouterLink],
  host: {
    '[class]': `[
      'text-white',
      'px-8',
      'py-6',
      'flex',
      'flex-col',
      'justify-between',
    ]`,
  },
})
export class Footer {}
