import { GemasDelInfinito } from './GemasDelInfinito.js';

export class GemaMente extends GemasDelInfinito {
    constructor() {
        super('Mente');
        this.poder = 'Manipular la Mente de cualquier ser vivo';
    }

    mostrarPoder() {
        console.log(`Soy la Gema ${this.nombre} y mi poder es ${this.poder}`);
    }
}