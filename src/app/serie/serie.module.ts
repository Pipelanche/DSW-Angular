import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent, ListaComponent],
  exports: [SerieComponent, ListaComponent]
})
export class SerieModule { }
