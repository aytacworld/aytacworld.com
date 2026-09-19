import { Component, inject, signal } from '@angular/core';
import { email, FormField, form, required } from '@angular/forms/signals';
import type { ContactData } from '../../../../types/contact-data.model';
import { Box } from '../../components/box';
import { Button } from '../../components/button';
import { Field } from '../../components/field';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'contact-form',
  template: `
    <form>
      <box [class.hidden]="result() !== 'default'" class="md:min-h-[535px]">
        <field fname="name" [formField]="form.name" />
        <field type="email" fname="email" [formField]="form.email" />
        <field fname="company" [formField]="form.company" />
        <field type="message" fname="message" [formField]="form.message" />
        <btn (click)="send()">Send inquiry</btn>
      </box>

      <box [class.hidden]="result() === 'default'" class="md:min-h-[535px]">
        @if (result() === 'success') {
          <p class="text-green-600">
            Your message is send succesfully, you'll receive a message in 48h
          </p>
        } @else {
          <p class="text-red-600">
            There was an error, please try later, or send an email directly to
            <a href="mailto:info@aytacworld.com">info@aytacworld.com</a>.
          </p>
        }
      </box>
    </form>
  `,
  imports: [Box, Field, Button, FormField],
})
export class ContactForm {
  private readonly api = inject(ApiService);

  protected result = signal<'default' | 'success' | 'failed'>('default');
  protected model = signal<ContactData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  protected form = form(this.model, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Email is incorrect' });
    required(schemaPath.message, { message: 'Message is required' });
  });

  protected send(): void {
    this.form().markAsTouched();
    if (this.form().invalid()) return;

    this.api.putContact(this.model()).subscribe({
      next: () => this.result.set('success'),
      error: () => this.result.set('failed'),
    });
  }
}
