import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CategoriaComponent } from './components/categoria/categoria.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PrincipalComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ]
})
export class SharedModule { }
