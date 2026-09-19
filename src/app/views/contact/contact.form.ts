import { Component, inject, signal } from '@angular/core';
import { email, FormField, form, required } from '@angular/forms/signals';
import { Box } from '../../components/box';
import { Button } from '../../components/button';
import { Field } from '../../components/field';
import { ApiService } from '../../services/api.service';
import type { ContactData } from '../../types/contact-data.model';

@Component({
  selector: 'contact-form',
  template: `
    <form ()>
      <box>
        <field fname="name" [formField]="form.name" />
        <field type="email" fname="email" [formField]="form.email" />
        <field fname="company" [formField]="form.company" />
        <field type="message" fname="message" [formField]="form.message" />
        <btn (click)="send()">Send inquiry</btn>
      </box>
    </form>
  `,
  imports: [Box, Field, Button, FormField],
})
export class ContactForm {
  private readonly api = inject(ApiService);

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
      next: (res)=> {
        console.log('hello', res);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
