import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightDarkModeService {

  constructor() { }

  private _isDarkMode = localStorage.getItem('darkMode') === 'true';

  get isDarkMode(){
    return localStorage.getItem('darkMode') === 'true';
  }

  set isDarkMode(value: boolean){
    this._isDarkMode = value;
    localStorage.setItem('darkMode', String(value));
    document.body.classList.toggle('dark-mode', value);
  }

  getBoxMode():string{
    return this.isDarkMode ? 'settingsBoxDarkMode' : 'settingsBoxLightMode';
  }

  initBodyClass(){
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }


}
