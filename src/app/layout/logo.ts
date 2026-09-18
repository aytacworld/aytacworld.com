import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, computed, input } from '@angular/core';

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
    />
  `,
  imports: [NgOptimizedImage],
})
export class logo {
  public invert = input(false, { transform: booleanAttribute });
  public size = input<LogoSize>('sm');

  protected s = computed(()=> {
    const v = this.size();

    return Sizes[v];
  });

}
