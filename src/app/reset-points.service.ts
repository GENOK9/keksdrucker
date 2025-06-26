import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetPointsService {

  constructor() { }

  get cookies(): number {
    return localStorage.getItem('cookies') === null ? 0 : Number(localStorage.getItem('cookies'));
  }

  set cookies(value: number) {
    localStorage.setItem('cookies', String(value));
  }

  get isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  getBoxMode():string{
    return this.isDarkMode ? 'settingsBoxDarkMode' : 'settingsBoxLightMode';
  }

  getButtonMode():string{
    return this.isDarkMode ? 'resetButtonDarkMode' : 'resetButtonLightMode';
  }
}
