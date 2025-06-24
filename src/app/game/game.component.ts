import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card"
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [MatIconModule, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  zaehler:number = 0;

  keksPress(){
    this.zaehler++;
  }
}
