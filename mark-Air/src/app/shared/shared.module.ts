import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { MarcasComponent } from './components/marcas/marcas.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PrincipalComponent,
    CategoriaComponent,
    UbicacionComponent,
    ModelosComponent,
    MarcasComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PrincipalComponent,
    CategoriaComponent,
    UbicacionComponent
  ]
})
export class SharedModule { }
