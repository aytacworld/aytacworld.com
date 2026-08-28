import { Component } from '@angular/core';
import { Box } from '../../components/box';
import { Button } from '../../components/button';
import { Field } from '../../components/field';

@Component({
  selector: 'contact-form',
  template: `
    <form>
      <box>
        <field name="name" />
        <field name="email" />
        <field name="company" />
        <field type="text" name="comment" />
        <btn class="w-full">Send inquiry</btn>
      </box>
    </form>
  `,
  imports: [Box, Field, Button],
  host: {
    '[class]': `[
  ]`,
  },
})
export class ContactForm {}
