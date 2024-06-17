import { Usuario } from "../usuario/usuario";

export class Sesion {
    constructor(
        public id_sesion: number,
        public usuario: Usuario,
        public fec_hor_ini_ses: Date,

    ) {}
}
