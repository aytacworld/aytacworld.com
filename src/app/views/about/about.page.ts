import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../components/button';
import { Page } from '../../core/page';
import { AboutBlock } from './about-block';

@Component({
  selector: 'about-page',
  template: `
    <a-block title="Technology built around your ambition">
      <p class="mb-[1.5rem]">
        We help organizations plan, build, and scale impactful digital
        products and platforms that drive growth, efficiency, and lasting
        value.
      </p>
      <btn action small routerLink="/contact">Work with us</btn>
    </a-block>

    <a-block title="Turning complex ideas into confident outcomes" sub="us" left [imageWidth]="600">
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
    </a-block>
  `,
  imports: [Button, RouterLink, AboutBlock],
  host: {
    '[class]': `[
      'flex',
      'flex-col',
      'md:gap-[2rem]'
    ]`,
  },
})
export class AboutPage extends Page {}
