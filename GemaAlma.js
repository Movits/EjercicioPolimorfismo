import { GemasDelInfinito } from './GemasDelInfinito.js';

export class GemaAlma extends GemasDelInfinito {
    constructor() {
        super('Alma');
        this.poder = 'Manipular la Alma de cualquier ser vivo';
    }

    mostrarPoder() {
        console.log(`Soy la Gema ${this.nombre} y mi poder es ${this.poder}`);
    }
}