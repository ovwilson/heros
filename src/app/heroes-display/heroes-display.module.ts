import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeroesDisplayComponent } from "./heroes-display.component";
import { HeroesLookupComponent } from "./../heroes-lookup/heroes-lookup.component";

import { APPRROUTES } from "./heroes-display.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations: [
    HeroesDisplayComponent,
    HeroesLookupComponent
  ],
  exports: [
    RouterModule
  ]
})

export class HeroesDisplayModule { }