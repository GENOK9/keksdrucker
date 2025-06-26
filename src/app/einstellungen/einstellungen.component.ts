import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {LightDarkModeComponent} from '../light-dark-mode/light-dark-mode.component';
import {ResetPointsComponent} from '../reset-points/reset-points.component';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {UpgradesService} from '../upgrades.service';
import {EinstellungenService} from '../einstellungen.service';

@Component({
  selector: 'app-einstellungen',
  imports: [MatIconModule, MatButtonModule, RouterLink, MatCardModule, LightDarkModeComponent, ResetPointsComponent, MatGridList, MatGridTile],
  templateUrl: './einstellungen.component.html',
  styleUrl: './einstellungen.component.css'
})
export class EinstellungenComponent {
  constructor(private einstellungenService: EinstellungenService) {}

  setGameButtonMode():string{
    return this.einstellungenService.getGameButtonMode();
  }

  setTitleTheme():string{
    return this.einstellungenService.getTitleTheme();
  }
}
