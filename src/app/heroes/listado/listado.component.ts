import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk'];
  HeroeBorrado: string = '';
  borrarHeroe() {
    this.HeroeBorrado = this.heroes.shift() || '';
  }
}
