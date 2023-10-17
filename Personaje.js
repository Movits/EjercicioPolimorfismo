export class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
    }

    usarGema() {
        console.log(`Soy ${this.nombre} y estoy usando el poder de ${this.gema.nombre}`);
    }
}