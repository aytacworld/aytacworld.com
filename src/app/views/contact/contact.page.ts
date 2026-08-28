import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '../../components/title';
import { ContactForm } from './contact.form';
import { ContactItem } from './contact-item';

@Component({
  selector: 'contact-page',
  template: `
    <div class="min-h-full max-w-[350px]">
      <t1>Let's move your business forward</t1>
      <p class="mb-[1rem]">
        Tell us about your goals and challenges.<br />
        We'll be in touch to start the conversation.
      </p>
      <contact-form />
    </div>
    <div class="grow flex flex-col">
      <div class="relative grow">
        <img ngSrc="./contact-ai.jpeg" priority fill />
      </div>
      <div class="flex mt-[1.5rem]">
        <div class="flex flex-col justify-between grow">
          <contact-item type="mail" value="info@aytacworld.com" />
          <contact-item type="phone" value="+32 xxx xx xx xx" />
          <contact-item type="office" value="Arthur Maesstraat 100/307, 1130 Brussel" />
        </div>
          <iframe width="400" height="200"
            src="https://www.openstreetmap.org/export/embed?bbox=4.423397183418275%2C50.88294708155157%2C4.428171515464784%2C50.88720790619238&amp;layer=mapnik&amp;marker=50.88507754258277%2C4.425784349441528"></iframe>
      </div>
    </div>
  `,
  imports: [Title, ContactForm, NgOptimizedImage, ContactItem],
  host: {
    '[class]': `[
      'flex',
      'gap-[3rem]',
    ]`,
  },
})
export class ContactPage {}
