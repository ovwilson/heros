import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HeroesAddComponent } from './heroes-add.component';
import { APPRROUTES } from "./heroes-add.routing";

@NgModule({
  imports: [
    RouterModule.forChild(APPRROUTES)
  ],
  declarations :[
    HeroesAddComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesAddModule {}