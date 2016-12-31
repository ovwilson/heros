import { Routes } from '@angular/router';
import { HeroesComponent } from "./heroes.component";
import { HeroesAddComponent } from "./heroes-add/heroes-add.component";

export const APPRROUTES: Routes = [
  { path: "", component: HeroesComponent },
  { path: "heroes-add", component: HeroesAddComponent, outlet: "add" }
];

// Example Auxiliary Route http://localhost:4200/speakers/(list:speakersList//bio:none)
