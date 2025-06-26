import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {LightDarkModeService} from '../light-dark-mode.service';

@Component({
  selector: 'app-light-dark-mode',
  imports: [
    MatCard,
    MatCardTitle,
    MatSlideToggle,
    FormsModule,
    MatCardContent
  ],
  templateUrl: './light-dark-mode.component.html',
  styleUrl: './light-dark-mode.component.css'
})
export class LightDarkModeComponent implements OnInit{
  isDarkMode = false;

  constructor(private lightDarkModeService: LightDarkModeService) {
  }

  ngOnInit() {
    this.isDarkMode = this.lightDarkModeService.isDarkMode;
    this.lightDarkModeService.initBodyClass();
  }
  toggleDarkMode(event: MatSlideToggleChange): void {
    this.lightDarkModeService.isDarkMode = event.checked;
    this.isDarkMode = event.checked;
  }

  setBoxMode(): string {
    return this.lightDarkModeService.getBoxMode();
  }
}
