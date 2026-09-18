import { Component } from '@angular/core';
import { Placeholder } from '../../components/placeholder';
import { Page } from '../../core/page';
import { ContactForm } from './contact.form';
import { ContactItem, type ContactItemType } from './contact-item';

@Component({
  selector: 'contact-page',
  template: `
    <div class="md:max-w-[350px]">
      <h1>Let's move your business forward</h1>
      <p class="mb-[1rem]">
        Tell us about your goals and challenges.<br />
        We'll be in touch to start the conversation.
      </p>
      <contact-form />
    </div>

    <div class="grow flex flex-col">
      <div class="relative grow hidden md:block">
        <placeholder fill />
      </div>
      <div class="flex flex-col md:flex-row mt-[1.5rem] gap-[1.5rem]">
        <div class="flex flex-col grow gap-4">
          <contact-item [type]="c[0][0]" [value]="c[0][1]" />
          <contact-item [type]="c[1][0]" [value]="c[1][1]" [href]="c[1][2]" />
          <contact-item [type]="c[2][0]" [value]="c[2][1]" />
        </div>
        <iframe class="w-full h-[200px] md:w-[400px]"
          src="https://www.openstreetmap.org/export/embed?bbox=4.423397183418275%2C50.88294708155157%2C4.428171515464784%2C50.88720790619238&amp;layer=mapnik&amp;marker=50.88507754258277%2C4.425784349441528"></iframe>
      </div>

    </div>
  `,
  imports: [ContactForm, ContactItem, Placeholder],
  host: {
    '[class]': `[
      'flex',
      'flex-col',
      'md:flex-row',
      'md:gap-[2rem]',
    ]`,
  },
})
export class ContactPage extends Page {
  protected c: Array<[ContactItemType, string, string?]> = [
    ['mail', 'info@aytacworld.com'],
    ['office', 'Arthur Maestraat 100/307, 1130 Brussel, BE', 'https://osm.org/go/0EoZds5YE--?m='],
    ['vat', 'BE0785.854.606'],
  ];
}
