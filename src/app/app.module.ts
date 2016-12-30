import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { firebaseEffects } from "./effects/effects";
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { APPRROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideNavComponent } from "./sidenav/sidenav.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(APPRROUTES)
        // StoreModule.provideStore({ todos: todos, filter: filter }),
        // StoreDevtoolsModule.instrumentStore({
        //    monitor: useLogMonitor({
        //        visible: true,
        //       position: 'right'
        //    })
        //}),
        //StoreLogMonitorModule,
        //EffectsModule.run(firebaseEffects)
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        SideNavComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }