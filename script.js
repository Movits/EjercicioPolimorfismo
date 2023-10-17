import { Personaje } from "./Personaje";
import { GemasDelInfinito } from "./GemasDelInfinito";

const personaje = new Personaje('Roberto');
const gemas = [];

gemas.push(new GemasDelInfinito('Alma'));
gemas.push(new GemasDelInfinito('Espacio'));
gemas.push(new GemasDelInfinito('Mente'));
gemas.push(new GemasDelInfinito('Poder'));
gemas.push(new GemasDelInfinito('Realidad'));
gemas.push(new GemasDelInfinito('Tiempo'));

gemas.forEach(gema => {
    personaje.usarGema(gema);
});