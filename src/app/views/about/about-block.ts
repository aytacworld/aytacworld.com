import { booleanAttribute, Component, input } from '@angular/core';
import { Placeholder } from '../../components/placeholder';

@Component({
  selector: 'a-block',
  template: `
    <div class="md:max-w-[400px]">
      <h1>
        <span>
          <small>{{ prefix() }} {{ sub() }}</small>
          {{ title() }}
        </span>
      </h1>

      <ng-content />

      <ng-content select="[action]" />
    </div>

    <placeholder class="hidden md:block" [width]="imageWidth()" rounded />
  `,
  imports: [Placeholder],
  host: {
    '[class]': `[
      'flex',
      'items-center',
      'md:items-stretch',
      left() ? 'flex-row-reverse' : '',
      'justify-between',
      'pr-[2rem]',
    ]`,
  },
})
export class AboutBlock {
  public left = input(false, { transform: booleanAttribute });
  public prefix = input('About');
  public sub = input('Aytacworld');
  public title = input.required<string>();
  public imageWidth = input(700);
}
