import {inject, Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UpgradesService} from './upgrades.service';

interface OnInIt {
}

@Injectable({
  providedIn: 'root'
})
export class ShopService implements OnInIt{


  constructor(private upgradeService: UpgradesService) { }
  cookies:number = 0;

  ngOnInIt(){
  }

  private _activeCookieImage$ = new BehaviorSubject<string>(
   localStorage.getItem('activeImage') ?? "realCookie.png"
  )

  public activeCookieImage$ = this._activeCookieImage$.asObservable();

  private _realCookiePrice$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('realCookiePrice')) || 0
  )

  public realCookiePrice$ = this._realCookiePrice$.asObservable();

  private _haferCookiePrice$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('haferCookiePrice')) || 15000
  )

  public haferCookiePrice$ = this._haferCookiePrice$.asObservable();

  private _leibnizCookiePrice$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('leibnizCookiePrice')) || 250000
  )

  public leibnizCookiePrice$ = this._leibnizCookiePrice$.asObservable();

  private _paintedCookiePrice$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('paintedCookiePrice')) || 50000000
  )

  public paintedCookiePrice$ = this._paintedCookiePrice$.asObservable();

  set paintedCookiePrice(value: number){
    localStorage.setItem('paintedCookiePrice', String(value));
    this._paintedCookiePrice$.next(value);
  }

  get paintedCookiePrice(): number{
    return this._paintedCookiePrice$.value;
  }

  set leibnizCookiePrice(value: number){
    localStorage.setItem('leibnizCookiePrice', String(value));
    this._leibnizCookiePrice$.next(value);
  }

  get leibnizCookiePrice(): number{
    return this._leibnizCookiePrice$.value;
  }
  set haferCookiePrice(value: number){
    localStorage.setItem('haferCookiePrice', String(value));
    this._haferCookiePrice$.next(value);
  }

  get haferCookiePrice(): number{
    return this._haferCookiePrice$.value;
  }

  set realCookiePrice(value: number){
    localStorage.setItem('realCookiePrice', String(value));
    this._realCookiePrice$.next(value);
  }

  get realCookiePrice(): number{
    return this._realCookiePrice$.value;
  }

  set activeCookieImage(value: string){
    localStorage.setItem('activeImage', value);
    this._activeCookieImage$.next(value);
  }

  get activeCookieImage(): string{
    return this._activeCookieImage$.value;
  }
  get isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  getShopButtonMode():string{
    return this.isDarkMode ? 'shopButtonDark' : 'shopButtonLight';
  }

  getTitleTheme():string{
    return this.isDarkMode ? 'titleDarkMode' : 'titleLightMode';
  }

  buyButtonTheme(){
    return this.isDarkMode ? 'BuyButtonDarkMode' : 'BuyButtonLightMode';
  }

  getShopBoxMode():string{
    return this.isDarkMode ? 'shopBoxDarkMode' : 'shopBoxLightMode';
  }

  buyRealCookie(){
      this.activeCookieImage ="realCookie.png";
  }

  buyHaferCookie(){
    if(this.upgradeService.cookies >= this.haferCookiePrice){
      this.activeCookieImage ="haferCookie.png";
      this.upgradeService.cookies -= this.haferCookiePrice;
      this.haferCookiePrice = 0;
    }else{
      console.log(this.upgradeService.cookies, this.haferCookiePrice,)
    }
  }

  buyLeibnizCookie(){
    if(this.upgradeService.cookies >= this.leibnizCookiePrice){
      this.activeCookieImage ="leibnizCookie.png";
      this.upgradeService.cookies -= this.leibnizCookiePrice;
      this.leibnizCookiePrice = 0;
    }
    else{
      console.log(this.upgradeService.cookies, this.leibnizCookiePrice,);
    }
  }

  buyPaintedCookie(){
    if(this.upgradeService.cookies >= this.paintedCookiePrice){
      this.activeCookieImage ="paintedCookie.png";
      this.upgradeService.cookies -= this.paintedCookiePrice;
      this.paintedCookiePrice = 0;
    }else{
      console.log(this.upgradeService.cookies, this.paintedCookiePrice,);
    }
  }

  getRealCookiePrice():string{
    if(this.realCookiePrice === 0){
      return "Auswählen";
    }else{
      return "Kaufen für: " + this.realCookiePrice;
    }
  }

  getHaferCookiePrice():string{
    if (this.haferCookiePrice == 0){
      return "Auswählen";
    }else{
      return "Kaufen für: " + this.haferCookiePrice + " Cookies";
    }
  }

  getLeibnizCookiePrice():string{
    if (this.leibnizCookiePrice == 0){
      return "Auswählen";
    }else{
      return "Kaufen für: " + this.leibnizCookiePrice + " Cookies";
    }
  }

  getPaintedCookiePrice():string{
    if (this.leibnizCookiePrice == 0){
      return "Auswählen";
    }else{
      return "Kaufen für: " + this.paintedCookiePrice + " Cookies";
    }
  }
}
