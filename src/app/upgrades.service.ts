import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ShopService} from "./shop.service";
@Injectable({
  providedIn: 'root'
})
export class UpgradesService {

  constructor() {
    this.startAC();
  }

  private _priceCPS$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('priceCPS')) || 20
  )

  public priceCPS$ = this._priceCPS$.asObservable();

  private _CPS$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('CPS')) || 1
  )
  public CPS$ = this._CPS$.asObservable();

  private _cookies$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('cookies')) || 0
  )

  public cookies$ = this._cookies$.asObservable();

  private _AC$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('AC')) || 0
  )

  public AC$ = this._AC$.asObservable();

  private _priceAC$ = new BehaviorSubject<number>(
    Number(localStorage.getItem('priceAC')) || 100
  )

  public priceAC$ = this._priceAC$.asObservable();

  get cookies(): number {
    return this._cookies$.value;
  }

  set cookies(value: number) {
    localStorage.setItem('cookies', String(value));
    this._cookies$.next(value);
  }

  get isDarkMode(): boolean {
    return localStorage.getItem('darkMode') === 'true';
  }

  get CPS():number{
    return this._CPS$.value;
  }

  set CPS(value:number){
    localStorage.setItem('CPS', String(value));
    this._CPS$.next(value);
  }

  get priceCPS():number{
    return this._priceCPS$.value;
  }

  set priceCPS(value:number){
    localStorage.setItem('priceCPS', String(value));
    this._priceCPS$.next(value);
  }

  get AC():number{
    return this._AC$.value;
  }

  set AC(value:number){
    localStorage.setItem('AC', String(value));
    this._AC$.next(value);
  }

  get priceAC():number{
    return this._priceAC$.value;
  }

  set priceAC(value:number){
    localStorage.setItem('priceAC', String(value));
    this._priceAC$.next(value);
  }

  getUpgradeBoxMode(): string{
    return this.isDarkMode ? 'upgradeBoxDarkMode' : 'upgradeBoxLightMode';
  }

  getUpgradeButtonMode():string{
    return this.isDarkMode ? 'upgradeButtonDarkMode' : 'upgradeButonLightMode';
  }

  getButtonCPSIcon():string{
    return this.cookies >= this.priceCPS ? "done" : "close";
  }

  getButtonACIcon():string{
    return this.cookies >= this.priceAC ? "done" : "close";
  }

  buyCPS(){
    if(this.cookies >= this.priceCPS){
      this.cookies -= this.priceCPS;
      this.CPS++;
      this.priceCPS *= 2;
    }
  }

  buyAC(){
    if(this.cookies >= this.priceAC){
      this.cookies -= this.priceAC;
      this.AC++;
      this.priceAC *= 2;
    }
  }

  cookiePress(){
    this.cookies += this.CPS;
  }

  startAC(){
    setInterval(() =>{
      this.cookies += this.AC;
      },1000
    );
  }

  setAlltoDefault(){
    this.cookies = 0;
    this.CPS = 1;
    this.priceCPS = 20;
    this.AC = 0;
    this.priceAC = 100;
    localStorage.setItem("activeImage", "realCookie.png")
    localStorage.setItem("realCookiePrice", String("0"));
    localStorage.setItem("haferCookiePrice", String("15000"));
    localStorage.setItem("leibnizCookiePrice", String("250000"));
    localStorage.setItem("paintedCookiePrice", String("50000000"));
  }
}
