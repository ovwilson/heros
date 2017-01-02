import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes.component";
import { HeroesAddComponent } from "./heroes-add/heroes-add.component";
import { APPRROUTES } from "./heroes.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations: [
    HeroesComponent,
    HeroesAddComponent
  ],
  exports: [
    RouterModule
  ]
})

export class HeroesModule { }