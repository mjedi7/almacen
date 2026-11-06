import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme: Element | null = null;

  constructor() {
    this.initThemeLink();
    const savedTheme = (typeof localStorage !== 'undefined') ? localStorage.getItem('theme') : null;
    const url = savedTheme || './assets/css/colors/red.css';
    if (this.linkTheme) {
      this.linkTheme.setAttribute('href', url);
    }
  }

  private initThemeLink(): Element | null {
    if (typeof document !== 'undefined') {
      let link = document.querySelector('#theme');
      if (!link) {
        link = document.createElement('link');
        link.id = 'theme';
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './assets/css/colors/red.css');
        document.head.appendChild(link);
      }
      this.linkTheme = link;
      return link;
    }
    return null;
  }

  changeTheme( theme: string ) {
    if (!this.linkTheme) {
      this.initThemeLink();
    }
    const url = `./assets/css/colors/${ theme }.css`;
    if (this.linkTheme) {
      this.linkTheme.setAttribute('href', url);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', url );
    }

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    if (typeof document === 'undefined') return;
    if (!this.linkTheme) {
      this.initThemeLink();
    }
    const links = document.querySelectorAll('.selector');
    const currentTheme = this.linkTheme ? this.linkTheme.getAttribute('href') : null;

    links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;

      if ( currentTheme && btnThemeUrl === currentTheme ) {
        elem.classList.add('working');
      }
    });
  }

}
