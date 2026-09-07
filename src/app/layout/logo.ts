import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type LogoSize = 'sm' | 'md' | 'lg';
const Sizes = {
  sm: [178, 36],
  md: [356, 72],
  lg: [712, 144],
};

@Component({
  selector: 'logo',
  template: `
    <img ngSrc="./banner-{{invert() ? 'invert' : 'default'}}.svg"
        priority [width]="s()[0]" [height]="s()[1]"
        [routerLink]="link()"
        class="cursor-pointer"
    />
  `,
  imports: [RouterLink, NgOptimizedImage],
})
export class logo {
  public link = input('');
  public invert = input(false, { transform: booleanAttribute });
  public size = input<LogoSize>('sm');

  protected s = computed(()=> {
    const v = this.size();

    return Sizes[v];
  });

}
