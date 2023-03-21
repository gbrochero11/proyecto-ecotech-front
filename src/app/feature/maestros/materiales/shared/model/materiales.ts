export class Materiales{
    codigo: string;
    material: string;
    unidad: string;
    suministro:string;
    cantidad:number;
    constructor(codigo?: string,  material?: string, 
        unidad?: string, suministro?:string,  cantidad?:number){
            this.codigo=codigo;
            this.material=material;
            this.unidad=unidad;
            this.suministro=suministro;
            this.cantidad=cantidad;
    }

}