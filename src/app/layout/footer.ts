import { Component } from '@angular/core';
import { logo } from './logo';

@Component({
  selector: 'app-footer',
  template: `
    <div>
      <logo invert />
      <p>
        We partner with leaders to solve complex challenges,<br />
        optimze operations, and unlock sustainable growth.
      </p>
    </div>
    <div>
      Services
    </div>
    <div>
      Company
    </div>
    <div>
      Contact
    </div>
  `,
  imports: [logo],
  host: {
    '[class]': `[
      'bg-primary-400',
      'text-white',
      'min-h-[100px]',
      'pl-8',
      'pt-6',
      'grid',
      'grid-cols-4',
    ]`,
  },
})
export class Footer {}
