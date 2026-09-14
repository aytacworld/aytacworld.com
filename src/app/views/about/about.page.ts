import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../components/button';
import { Placeholder } from '../../components/placeholder';
import { Page } from '../../core/page';

@Component({
  selector: 'about-page',
  template: `
    <div class="flex items-center justify-between pr-[2rem]">
      <div class="max-w-[400px] pt-[1.5rem] pb-[3rem]">
        <h1>
          <span>
            <small>About Aytacworld</small>
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
      <placeholder [width]="700" rounded />
    </div>

    <div class="flex items-center justify-between pr-[2rem]">
      <placeholder [width]="600" rounded />
      <div class="max-w-[400px] pt-[1.5rem] pb-[3rem]">
        <h2>
          <span>
            <small>About us</small>
            Turning complex ideas into confident outcomes
          </span>
        </h2>
        <p>
          Aytacworld is an IT consultancy and project development partner for
          forward-thinking organizations. We combine deep industry expertise
          with modern engineering practices to deliver solutions that solve
          today's challenges and scale for tomorrow.
        </p>
        <p class="mb-[1.5rem]">
          From strategy and architecture to delivery and adoption, we work
          closely with your team to keep projects on track, on budget, and
          aligned to your goals.
        </p>
      </div>
    </div>

  `,
  imports: [Button, RouterLink, Placeholder],
  host: {
    '[class]': `[
      'flex',
      'flex-col',
    ]`,
  },
})
export class AboutPage extends Page {}
