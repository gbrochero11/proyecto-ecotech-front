export class UserAppDTO {
    id: number;
    id_empresa: number;
    id_tipo_usuario: number;
    documento: string;
    nombres: string;
    apellidos: string;
    usuarioapp: string;
    contrasenaapp: number;



    constructor(id: number, id_empresa: number, id_tipo_usuario: number, documento: string
        , nombres: string, apellidos: string, usuarioapp: string, contrasenaapp: number) {
        this.id = id;
        this.id_empresa = id_empresa;
        this.id_tipo_usuario = id_tipo_usuario;
        this.documento = documento;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.usuarioapp = usuarioapp;
        this.contrasenaapp = contrasenaapp;
    }
}