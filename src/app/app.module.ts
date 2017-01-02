import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FirebaseEffects } from "./effects/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { APPRROUTES } from "./app.routes";
import { PreloadSelectedModules } from "./app.preload-strategy";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideNavComponent } from "./sidenav/sidenav.component";

import { heroes } from "./reducers/heroes";
import { filter } from "./reducers/filter";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(APPRROUTES, { preloadingStrategy: PreloadSelectedModules }),
        StoreModule.provideStore({ heroes: heroes, filter: filter }),
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: "right"
            })
        }),
        StoreLogMonitorModule,
        EffectsModule.run(FirebaseEffects)
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        SideNavComponent
    ],
    providers: [
        PreloadSelectedModules
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }