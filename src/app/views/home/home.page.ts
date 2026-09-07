import { Component } from '@angular/core';
import { Page } from '../../core/page';

@Component({
  selector: 'home-page',
  template: `
    <ul>
      <li>Responsive: about page</li>
      <li>Responsive: services page</li>
      <li>Responsive: home page</li>
      <li>Analyse: darkmode</li>
    </ul>
  `,
  imports: [],
})
export class HomePage extends Page {}
