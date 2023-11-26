import { GemasDelInfinito } from './GemasDelInfinito.js';

export class GemaTiempo extends GemasDelInfinito {
    constructor() {
        super('Tiempo');
        this.poder = 'Manipular el Tiempo a mi antojo';
    }

    mostrarPoder() {
        console.log(`Soy la Gema ${this.nombre} y mi poder es ${this.poder}`);
    }
}