import { booleanAttribute, Component, input, output } from '@angular/core';
import { mdiLoading } from '@mdi/js';
import { Icon } from './icon';

@Component({
  selector: 'btn',
  imports: [Icon],
  template: `
    @if (loading()) {
      <icon class="stroke-white fill-white" animateSpin [path]="mdiLoading" />
    }
    <ng-content />
  `,
  host: {
    '(click)': 'clicked($event)',
    '[class]': `[
      'text-center',
      small() ? 'inline-block' : 'block',
      disabled() ? 'bg-gray-500' : 'bg-primary-400',
      disabled() ? 'bg-gray-500' : 'hover:bg-primary-500',
      disabled() ? 'bg-gray-500' : 'active:bg-primary-600',
      'text-white',
      'rounded-md',
      disabled() ? 'cursor-default' : 'cursor-pointer',
      'content-center',
      'shadow-lg',
      'px-[12px]',
      'py-[8px]',
    ]`,
  },
})
export class Button {
  protected readonly mdiLoading = mdiLoading;

  public type = input<string>();
  public small = input(false, { transform: booleanAttribute });
  public disabled = input(false, { transform: booleanAttribute });
  public loading = input(false, { transform: booleanAttribute });
  public onClick = output<MouseEvent>();

  protected clicked(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.disabled()) return;

    this.onClick.emit(event);
  }
}
