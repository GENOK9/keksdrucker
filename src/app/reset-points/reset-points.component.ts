import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {ResetPointsService} from '../reset-points.service';
import {UpgradesService} from '../upgrades.service';

@Component({
  selector: 'app-reset-points',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatIcon
  ],
  templateUrl: './reset-points.component.html',
  styleUrl: './reset-points.component.css'
})
export class ResetPointsComponent {

  constructor(private resetPointsService: ResetPointsService, private upgradeService: UpgradesService) {
  }

  resetAll(){
    this.upgradeService.setAlltoDefault();
  }

  setBoxMode(): string {
    return this.resetPointsService.getBoxMode();
  }

  setButtonMode():string{
    return this.resetPointsService.getButtonMode();
  }
}
