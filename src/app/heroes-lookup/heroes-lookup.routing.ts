import { Routes } from '@angular/router';
import { HeroesLookupComponent } from "./heroes-lookup.component";

export const APPRROUTES: Routes = [
  { path: "", component: HeroesLookupComponent, outlet: "sidenav" }
];

// Example Auxiliary Route http://localhost:8080/heroes/(sidenav:heroes-add)