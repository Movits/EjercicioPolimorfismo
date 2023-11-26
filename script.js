import { Personaje } from "./Personaje.js";
import { GemaAlma } from "./GemaAlma.js";
import { GemaEspacio } from "./GemaEspacio.js";
import { GemaRealidad } from "./GemaRealidad.js";
import { GemaMente } from "./GemaMente.js";
import { GemaPoder } from "./GemaPoder.js";
import { GemaTiempo } from "./GemaTiempo.js";

const personajes = [new Personaje('Roberto')];
const gemas = [];

gemas.push(new GemaAlma());
gemas.push(new GemaEspacio());
gemas.push(new GemaRealidad());
gemas.push(new GemaMente());
gemas.push(new GemaPoder());
gemas.push(new GemaTiempo());

personajes.forEach(personaje => {
    gemas.forEach(gema => {
        personaje.usarGema(gema);
        console.log('-------------------');
    });
    console.log("Ahora que ya usé todas las gemas, me voy a dormir");
});