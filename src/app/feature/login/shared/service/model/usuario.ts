export class Usuario {
    id: number;
    documento:number;
    tipousuario:any;
    nombre:string;
    razon_social:string;
    codigo_rut:number;
    direccion: string;
    representante:string;
    telefono:number;
    correo_electronico:string;
    usuario_app:string;
    password_app:string;
    token:string
    

    constructor(id?: number,
      documento?:number,
      tipousuario?:any,
      nombre?:string,
      razon_social?:string,
      codigo_rut?:number,
      direccion?: string,
      representante?:string,
      telefono?:number,
      correo_electronico?:string,
      usuario_app?:string,
      password_app?:string,
      token?:string
      )
      {
        this.id=id;
        this.documento=documento;
        this.tipousuario=tipousuario;
        this.nombre=nombre;
        this.razon_social =razon_social;
        this.codigo_rut=codigo_rut;
        this.direccion=direccion;
        this.representante=representante;
        this.telefono=telefono;
        this.correo_electronico=correo_electronico;
        this.usuario_app=usuario_app;
        this.password_app=password_app;
        this.token=token;
      }
}
