export class Usuario {
    constructor(
        public id_usuario: number,
        public clave: string,
        public nombre: string,
        public contrasena: string,
        public estado: boolean,
        public fec_hor_creacion: Date,
        public fec_hor_ult_mod: Date,
        public usu_ult_mod: string
    ) {}

    
}
