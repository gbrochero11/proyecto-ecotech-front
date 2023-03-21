export class Ciudades{
    id: number;
    localidad: string;
    departamento: string;
    constructor(id?: number,  localidad?: string, 
        departamento?: string){
            this.id=id;
            this.localidad=localidad;
            this.departamento=departamento;
    }

}