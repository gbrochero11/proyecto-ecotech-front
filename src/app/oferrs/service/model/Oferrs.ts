export class Oferrs {
    id: number;
    codigo_estado: number;
    toneladas: number;
    documento_usuario: string;
    documento_empresa: string;
    direccion: string;
    fecha_solicitud: string;
    ciudad_origen: string;
    nombre_horeca: string;
    telefono: number;

    constructor(id: number, codigo_estado: number, toneladas: number, documento_usuario: string
        , direccion: string, fecha_solicitud: string, ciudad_origen: string, nombre_horeca: string, telefono: number, documento_empresa: string) {
        debugger
        this.id = id;
        this.codigo_estado = codigo_estado;
        this.toneladas = toneladas;
        this.documento_usuario = documento_usuario;
        this.direccion = direccion;
        this.fecha_solicitud = fecha_solicitud;
        this.ciudad_origen = ciudad_origen;
        this.nombre_horeca = nombre_horeca;
        this.telefono = telefono;
        this.documento_empresa = documento_empresa;
    }
}