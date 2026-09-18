import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../components/button';
import { Placeholder } from '../../components/placeholder';
import { Page } from '../../core/page';

@Component({
  selector: 'home-page',
  template: `
    <h1 big>Your partner for software solutions</h1>
    <div class="relative h-[10rem] md:h-[25rem]">
      <placeholder fill rounded />
    </div>
    <div class="mt-8 md:mx-24">
      <p>
        Aytacworld is a JavaScript development company creating fast,
        scalable web and mobile applications with Angular, Typescript and
        NodeJS to help businesses grow through reliable digital solutions.
      </p>

      <div>
        <btn small routerLink="/about">About us</btn>
      </div>
    </div>
  `,
  imports: [Placeholder, Button, RouterLink],
  host: {
    '[class]': `[
      'flex',
      'flex-col',
      'md:pr-8'
    ]`,
  },
})
export class HomePage extends Page {}
