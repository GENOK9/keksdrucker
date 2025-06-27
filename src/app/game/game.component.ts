import {Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card"
import {RouterLink} from '@angular/router';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {UpgradesComponent} from '../upgrades/upgrades.component';
import {GameService} from '../game.service';
import {UpgradesService} from '../upgrades.service';
import {ShopService} from '../shop.service';

@Component({
  selector: 'app-game',
  imports: [MatIconModule, MatButtonModule, MatCardModule, RouterLink, MatGridList, MatGridTile, UpgradesComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{

  cookies:number = 0;
  CPS:number = 0;
  AC:number = 0;
  IMG:string = ""

  constructor(private gameService: GameService,
              private upgradesService: UpgradesService,
              private shopService: ShopService
  ) {}

  ngOnInit() {
    this.upgradesService.cookies$.subscribe((value:number)=> {
      this.cookies = value;
    });
    this.upgradesService.CPS$.subscribe((value:number)=> {
      this.CPS = value;
    });
    this.upgradesService.AC$.subscribe((value:number)=> {
      this.AC = value;
    });
  }

  cookiePress(){
    this.upgradesService.cookiePress();
  }
  setSettingButtonMode():string{
    return this.gameService.getSettingButtonMode();
  }

  setTitleTheme():string{
    return this.gameService.getTitleTheme();
  }

  setCookieImg():string{
    return this.shopService.activeCookieImage;
  }



}
