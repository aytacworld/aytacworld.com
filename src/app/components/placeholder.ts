import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'placeholder',
  template: `
    <img ngSrc="/placeholder.jpeg" priority
      [width]="w() || undefined"
      [height]="h() || undefined"
      [fill]="f() || undefined"
      [class.rounded-md]="rounded()"
    />
  `,
  imports: [NgOptimizedImage],
})
export class Placeholder {
  public width = input<number>();
  public fill = input(false, { transform: booleanAttribute });
  public rounded = input(false, { transform: booleanAttribute });

  protected w = signal<number>(0);
  protected h = signal<number>(0);
  protected f = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (this.fill()) {
        this.w.set(0);
        this.h.set(0);
        return this.f.set(true);
      }

      const w = this.width() as number;
      if (w) {
        this.w.set(w);
        this.h.set((941 / 1672) * w);

        return this.f.set(false);
      }

      throw new Error('use width or fill');
    });
  }
}
