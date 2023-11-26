import { GemasDelInfinito } from './GemasDelInfinito.js';

export class GemaRealidad extends GemasDelInfinito {
    constructor() {
        super('Realidad');
        this.poder = 'Manipular la Realidad a mi antojo';
    }

    mostrarPoder() {
        console.log(`Soy la Gema ${this.nombre} y mi poder es ${this.poder}`);
    }
}