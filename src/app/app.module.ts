import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FirebaseEffects } from "./store/effects/firebase-effects";
import { MaterializeEffects } from "./store/effects/materialize-effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { APPRROUTES } from "./app.routes";
import { PreloadSelectedModules } from "./app.preload-strategy";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoaderComponent } from "./loader/loader.component";

import { heroes } from "./store/reducers/heroes";
import { hero } from "./store/reducers/hero";
import { herofriends } from "./store/reducers/hero-friends";
import { filter } from "./store/reducers/filter";
import { loader } from "./store/reducers/loader";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(APPRROUTES, { preloadingStrategy: PreloadSelectedModules }),
        StoreModule.provideStore({ heroes: heroes, hero: hero, herofriends: herofriends, filter: filter, loader: loader }),
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: "right"
            })
        }),
        StoreLogMonitorModule,
        EffectsModule.run(FirebaseEffects),        
        EffectsModule.run(MaterializeEffects)
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        LoaderComponent
    ],
    providers: [
        PreloadSelectedModules
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }