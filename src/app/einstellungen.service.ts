import { Injectable } from '@angular/core';
import {ShopService} from './shop.service';
import {UpgradesService} from './upgrades.service';

@Injectable({
  providedIn: 'root'
})
export class EinstellungenService {

  constructor(private shopService: ShopService, private upgrade:UpgradesService) { }

  get isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  getGameButtonMode():string{
    return this.isDarkMode ? 'backToGameButtonDarkMode' : 'backToGameButtonLightMode';
  }

  getTitleTheme():string{
    return this.isDarkMode ? 'titleDarkMode' : 'titleLightMode';
  }

  refresh(){
    this.shopService.activeCookieImage = <string>localStorage.getItem("activeImage")
    this.shopService.realCookiePrice = Number(localStorage.getItem("realCookiePrice"))
    this.shopService.haferCookiePrice = Number(localStorage.getItem("haferCookiePrice"))
    this.shopService.leibnizCookiePrice = Number(localStorage.getItem("leibnizCookiePrice"))
    this.shopService.paintedCookiePrice = Number(localStorage.getItem("paintedCookiePrice"))
  }

}
