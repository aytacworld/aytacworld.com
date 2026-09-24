import { Service } from '@angular/core';

const THEME = 'theme';
type ThemeType = 'light' | 'dark' | null;

@Service()
export class ThemeService {
  constructor() {
    this.setTheme();
  }

  public getTheme(): ThemeType {
    return localStorage.getItem(THEME) as ThemeType;
  }

  public setLight(): void {
    localStorage[THEME] = 'light';
    this.setTheme();
  }

  public setDark(): void {
    localStorage[THEME] = 'dark';
    this.setTheme();
  }

  public setOs(): void {
    localStorage.removeItem(THEME);
    this.setTheme();
  }

  private setTheme(): void {
    document.documentElement.classList.toggle(
      'dark',
      localStorage[THEME] === 'dark' ||
        (!(THEME in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }
}
