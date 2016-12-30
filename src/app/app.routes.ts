import { Routes } from "@angular/router";

export const APPRROUTES: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
    { path: "", loadChildren: "./dashboard/dashboard.module#DashboardModule" },
    { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" },
    { path: "heroes", loadChildren: "./heroes/heroes.module#HeroesModule" },
    { path: "heroes-add", loadChildren: "./heroes/heroes-add/heroes-add.module#HeroesAddModule" },
    { path: "**", loadChildren: "./dashboard/dashboard.module#DashboardModule" }
];