import { Routes } from '@angular/router';
import { HeroesDisplayComponent } from "./heroes-display.component";
import { HeroesLookupComponent } from "./../heroes-lookup/heroes-lookup.component";

export const APPRROUTES: Routes = [
  { path: "", component: HeroesDisplayComponent },
  { path: "heroes-lookup/:id", component: HeroesLookupComponent, outlet: "sidenav" }

];

// Example Auxiliary Route http://localhost:8080/heroes/(sidenav:heroes-add)