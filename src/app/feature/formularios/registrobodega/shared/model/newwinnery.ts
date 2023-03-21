export class NewWinnery{
    id: number;
    id_movimiento: number;
    id_estado: number;
    consecutivo: number;
    solicitado_por: string;
    fecha: Date;
    id_ciudad: number;
    zona: string;
    descripcion: string;
    serial: string;
    cantidad: number;
    observaciones: string;
    pertenece: string;
    constructor(id: number,id_movimiento: number,id_estado: number,
        consecutivo: number,solicitado_por: string,fecha: Date,id_ciudad: number,
        zona: string,descripcion: string,serial: string,
        cantidad: number, observaciones: string, pertenece: string){
            this.id=id;
            this.id_movimiento=id_movimiento;
            this.id_estado=id_estado;
            this.consecutivo=consecutivo;
            this.solicitado_por=solicitado_por;
            this.fecha=fecha;
            this.id_ciudad=id_ciudad;
            this.zona=zona;
            this.descripcion=descripcion;
            this.serial=serial;
            this.cantidad=cantidad;
            this.observaciones=observaciones;
            this.pertenece=pertenece;
    }
}