import { Component } from '@angular/core';
import { Button } from '../../components/button';
import { Page } from '../../core/page';

@Component({
  selector: 'about-page',
  template: `
    <div class="">
      <h1>
        <span>
          <small>ABOUT AYTACWORLD</small>
          Technology built around your ambition
        </span>
      </h1>
      <p>We help organizations plan, build, and scale impactful digital
        products and platforms that drive growth, efficiency, and lasting
        value.
      </p>

      <btn small>Work with us</btn>
    </div>

  `,
  imports: [Button],
})
export class AboutPage extends Page {}
