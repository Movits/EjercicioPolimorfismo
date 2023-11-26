import { GemasDelInfinito } from './GemasDelInfinito.js';

export class GemaEspacio extends GemasDelInfinito {
    constructor() {
        super('Espacio');
        this.poder = 'Manipular el Espacio a mi antojo';
    }

    mostrarPoder() {
        console.log(`Soy la Gema ${this.nombre} y mi poder es ${this.poder}`);
    }
}