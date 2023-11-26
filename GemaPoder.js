import { GemasDelInfinito } from './GemasDelInfinito.js';

export class GemaPoder extends GemasDelInfinito {
    constructor() {
        super('Poder');
        this.poder = 'Manipular el Poder de cualquier ser vivo';
    }

    mostrarPoder() {
        console.log(`Soy la Gema ${this.nombre} y mi poder es ${this.poder}`);
    }
}