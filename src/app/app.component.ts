import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { GameComponent } from "./game/game.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'keksdrucker';

  ngOnInit() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDark);
  }
}
