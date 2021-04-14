import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  //Componentes que tienes
  declarations: [
    ContadorComponent
  ],
  //Exportar los componentes que vas a usar fuera del modulo
  exports: [
    ContadorComponent
  ]
})


export class ContadorModule {}
