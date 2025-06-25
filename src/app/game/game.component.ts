import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card"
import {RouterLink} from '@angular/router';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {UpgradesComponent} from '../upgrades/upgrades.component';

@Component({
  selector: 'app-game',
  imports: [MatIconModule, MatButtonModule, MatCardModule, RouterLink, MatGridList, MatGridTile, UpgradesComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  cookies:number = localStorage.getItem('cookies') === null ? 0 : Number(localStorage.getItem('cookies'));

  keksPress(){
    this.cookies++;
    localStorage.setItem('cookies', String(this.cookies));
  }
  setSettingButtonMode():string{
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === 'true' ? 'settingsButtonDark' : 'settingsButtonLight';
  }

  setTitleTheme():string{
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === 'true' ? 'titleDarkMode' : 'titleLightMode';
  }

}
