export class Usuarios{
    id: number;
    identificacion: number;
    nombre: string;
    segundo_nombre:string;
    apellido: string;
    segundo_apellido: string;
    usuario: string;
    contraseña: string;
    tiporol: number;

    constructor(identificacion?: number,nombre?: string,apellido?: string,
      usuario?: string,contraseña?: string, tiporol?: number, id?: number){
        this.id=id;
        this.identificacion=identificacion;
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.tiporol=tiporol;
    }
}
