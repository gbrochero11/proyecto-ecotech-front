export class LogBook {
    id: number;
    id_solicitud: number;
    descripcion: string;
    fecha_registro: string;
    estado_servicio: number;
    nombre_servicio: string;

    constructor(id: number, id_solicitud: number, descripcion: string, fecha_registro: string) {
        this.id = id;
        this.id_solicitud = id_solicitud;
        this.descripcion = descripcion;
        this.fecha_registro = fecha_registro
    }
}
