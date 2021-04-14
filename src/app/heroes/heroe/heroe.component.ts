import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    heroe: string = "Ironman";
    edad: number = 45;

    get nombreCapitalizado() {
      return this.heroe.toUpperCase();
    }

    obtenerNombre(): string {
      return this.heroe + "-" + this.edad;
    }

    cambiarNombre() {
      this.heroe = "Spiderman";
    }

    cambiarEdad() {
      this.edad = 19;
    }
}
