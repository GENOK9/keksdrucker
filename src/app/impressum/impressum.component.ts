import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ImpressumService } from '../impressum.service';

@Component({
  selector: 'app-impressum',
  imports: [MatListModule,MatIconModule, MatButtonModule, RouterLink, MatCardModule, MatGridList, MatGridTile],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css'
})
export class ImpressumComponent {
  constructor(private impressumService: ImpressumService)   {}



  setGameButtonMode():string{
    return this.impressumService.getGameButtonMode();
  }
  setTitleTheme(): string{
    return this.impressumService.getTitleTheme();
  }
  setImpressumTheme():string{
    return this.impressumService.getCardTheme();
  }
}
