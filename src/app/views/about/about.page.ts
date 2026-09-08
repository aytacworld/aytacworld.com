import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../components/button';
import { Page } from '../../core/page';
    // <div class="md:bg-[url(/contact-ai.jpeg)] md:bg-cover md:bg-top-right md:bg-linear-to-l md:from-yellow-500 md:to-blue-500">

@Component({
  selector: 'about-page',
  template: `
    <div class="hidden md:block fixed left-0 w-screen h-[370px] bg-[url(/contact-ai.jpeg)] bg-cover -z-1">
    </div>
    <div class="max-w-[400px] pt-[1.5rem] pb-[3rem]">
      <h1>
        <span>
          <small>ABOUT AYTACWORLD</small>
          Technology built around your ambition
        </span>
      </h1>
      <p class="mb-[1.5rem]">
        We help organizations plan, build, and scale impactful digital
        products and platforms that drive growth, efficiency, and lasting
        value.
      </p>

      <btn small routerLink="/contact">Work with us</btn>
    </div>

  `,
  imports: [Button, RouterLink],
  host: {
    '[class]': `[
      'flex',
      'flex-col',
    ]`,
  },
})
export class AboutPage extends Page {}
