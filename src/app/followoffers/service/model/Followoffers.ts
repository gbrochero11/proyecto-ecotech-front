export class FollowOffers {
    id: number;
    codigo_estado: number;
    toneladas: number;
    documento_usuario: string;
    direccion: string;
    fecha_solicitud: string;
    ciudad_origen: string;
    nombre_horeca: string;

    constructor(id: number, codigo_estado: number, toneladas: number, documento_usuario: string
        , direccion: string, fecha_solicitud: string, ciudad_origen: string, nombre_horeca: string) {
        this.id = id;
        this.codigo_estado = codigo_estado;
        this.toneladas = toneladas;
        this.documento_usuario = documento_usuario;
        this.direccion = direccion;
        this.fecha_solicitud = fecha_solicitud;
        this.ciudad_origen = ciudad_origen;
        this.nombre_horeca = nombre_horeca;
    }
}

