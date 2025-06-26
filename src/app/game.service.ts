import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  get isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  getSettingButtonMode():string{
    return this.isDarkMode ? 'settingsButtonDarkMode' : 'settingsButtonLightMode';
  }

  getTitleTheme():string{
    return this.isDarkMode ? 'titleDarkMode' : 'titleLightMode';
  }
}
