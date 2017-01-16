import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeroesLookupComponent } from "./heroes-lookup.component";
import { APPRROUTES } from "./heroes-lookup.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      RouterModule.forChild(APPRROUTES)
  ],
  declarations: [
    HeroesLookupComponent
  ],
  exports: [
    RouterModule
  ]
})

export class HeroesLookupModule { }