import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroesAddComponent } from "./heroes-add/heroes-add.component";
import { APPRROUTES } from "./heroes.routing";

@NgModule({
  imports: [
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

export class HeroesModule {}