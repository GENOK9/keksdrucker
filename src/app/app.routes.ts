import { Routes } from '@angular/router';
import {GameComponent} from './game/game.component';
import {EinstellungenComponent} from './einstellungen/einstellungen.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {ShopComponent} from './shop/shop.component';

export const routes: Routes = [
  {path:"",
    redirectTo:"game",
    pathMatch:"full"
  },
  {path:"game",
  component:GameComponent
  },
  {
    path:"settings",
    component:EinstellungenComponent
  },
  {
    path:"impressum",
    component:ImpressumComponent
  },
  {
    path:"shop",
    component:ShopComponent
  }

];

