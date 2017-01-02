import { Routes } from '@angular/router';
import { HeroesComponent } from "./heroes.component";
import { HeroesAddComponent } from "./heroes-add/heroes-add.component";
import { HeroesEditComponent } from "./heroes-edit/heroes-edit.component";

export const APPRROUTES: Routes = [
  { path: "", component: HeroesComponent },
  { path: "heroes-add", component: HeroesAddComponent, outlet: "sidenav" },
  { path: "heroes-edit/:id", component: HeroesEditComponent, outlet: "sidenav" }
];

// Example Auxiliary Route http://localhost:8080/heroes/(sidenav:heroes-add)