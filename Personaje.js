export class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
    }

    usarGema(gema) {
        console.log(`Soy ${this.nombre} y estoy usando el poder de ${gema.nombre}`);
        gema.mostrarPoder();
    }
}