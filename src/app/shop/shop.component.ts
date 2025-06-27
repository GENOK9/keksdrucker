import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {ShopService} from '../shop.service';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-shop',
  imports: [
    MatGridList,
    MatGridTile,
    MatButton,
    MatIcon,
    RouterLink,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardFooter
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent{

  constructor(private shopService: ShopService) {}

  setShopButtonMode():string{
    return this.shopService.getShopButtonMode()
  }

  setTitleTheme(){
    return this.shopService.getTitleTheme();
  }

  setShopBoxMode(){
    return this.shopService.getShopBoxMode();
  }

  setRealCookiePrice(){
    return this.shopService.getRealCookiePrice();
  }

  buyRealCookie(){
    this.shopService.buyRealCookie();
  }

  setHaferCookiePrice(){
    return this.shopService.getHaferCookiePrice();
  }

  buyHaferCookie(){
    this.shopService.buyHaferCookie();
  }

  setLeibnizCookiePrice(){
    return this.shopService.getLeibnizCookiePrice();
  }

  buyLeibnizCookie(){
    this.shopService.buyLeibnizCookie();
  }

  setPaintedCookiePrice(){
    return this.shopService.getPaintedCookiePrice();
  }
  buyPaintedCookie(){
    this.shopService.buyPaintedCookie();
  }

  BuyButtonMode(){
    return this.shopService.buyButtonTheme();
  }
}
