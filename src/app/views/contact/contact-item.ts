import { Component, computed, input } from '@angular/core';
import { mdiEmailOutline, mdiMapMarkerOutline, mdiPhoneOutline } from '@mdi/js';
import { Icon } from '../../components/icon';

export type ContactItemType = 'mail' | 'phone' | 'office';

@Component({
  selector: 'contact-item',
  template: `
    <div class="flex justify-center items-center mr-[1rem]">
      <div class="bg-gray-200 rounded-full p-2">
        <icon [path]="icon()" />
      </div>
    </div>
    <div class="flex flex-col">
      <span class="font-bold capitalize">{{ type() }}</span>
      <a class="text-underline text-primary-400"
        [href]="hrefValue()"
        target="_blank"
      >{{ value() }}</a>
    </div>
  `,
  imports: [Icon],
  host: { '[class]': `['flex']` },
})
export class ContactItem {
  public type = input<ContactItemType>('mail');
  public value = input.required<string>();
  public href = input<string>();

  protected icon = computed(() => {
    const t = this.type();

    if (t === 'phone') return mdiPhoneOutline;
    if (t === 'office') return mdiMapMarkerOutline;

    return mdiEmailOutline;
  });

  protected hrefValue = computed(() => {
    if (this.href()) return this.href();

    const t = this.type();
    const v = this.value();

    if (t === 'phone') return `tel:${v}`;
    if (t === 'office') return `geo:${v}`;

    return `mailto:${v}`;
  });
}
