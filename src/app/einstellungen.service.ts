import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EinstellungenService {

  constructor() { }

  get isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  getGameButtonMode():string{
    return this.isDarkMode ? 'backToGameButtonDarkMode' : 'backToGameButtonLightMode';
  }

  getTitleTheme():string{
    return this.isDarkMode ? 'titleDarkMode' : 'titleLightMode';
  }

}
