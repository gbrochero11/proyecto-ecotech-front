export class Request {
    id: number;
    codigo_estado: number;
    toneladas: number;
    documento_usuario: string;
    direccion: string;
    fecha_solicitud: string;
    ciudad_origen: string;

    constructor(id: number, codigo_estado: number, toneladas: number, documento_usuario: string
        , direccion: string, fecha_solicitud: string, ciudad_origen: string) {
        debugger
        this.id = id;
        this.codigo_estado = codigo_estado;
        this.toneladas = toneladas;
        this.documento_usuario = documento_usuario;
        this.direccion = direccion;
        this.fecha_solicitud = fecha_solicitud;
        this.ciudad_origen = ciudad_origen;
    }
}