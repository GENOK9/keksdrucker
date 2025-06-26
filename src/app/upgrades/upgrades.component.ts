import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {UpgradesService} from '../upgrades.service';

@Component({
  selector: 'app-upgrades',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatCardFooter
  ],
  templateUrl: './upgrades.component.html',
  styleUrl: './upgrades.component.css'
})
export class UpgradesComponent {
  constructor(private upgradesService: UpgradesService) {}

  setUpgradeBoxMode(): string {
    return this.upgradesService.getUpgradeBoxMode();
  }

  setUpgradeButtonMode():string{
    return this.upgradesService.getUpgradeButtonMode();
  }

  setBuyButtonCPSIcon():string{
    return this.upgradesService.getButtonCPSIcon();
  }

  setBuyButtonACIcon():string{
    return this.upgradesService.getButtonACIcon();
  }

  buyCPS(){
    this.upgradesService.buyCPS();
  }
  buyAC(){
    this.upgradesService.buyAC();
  }
  setCPSPreis():number{
    return this.upgradesService.priceCPS;
  }
  setACPreis():number{
    return this.upgradesService.priceAC;
  }
}
