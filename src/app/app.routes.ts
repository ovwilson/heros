import { Routes } from "@angular/router";

export const APPRROUTES: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
    { path: "", loadChildren: "./dashboard/dashboard.module#DashboardModule", data: { preload: true } },
    { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule", data: { preload: true } },
    { path: "heroes", loadChildren: "./heroes/heroes.module#HeroesModule", data: { preload: true } },
    { path: "**", loadChildren: "./dashboard/dashboard.module#DashboardModule", data: { preload: true } }
];