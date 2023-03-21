export class Vehiculo{
    id: number;
    idConductor: number;
    placa: string;
    numeroMotor: string;
    numeroChasis: string;
    toneladas: number;
    tipoVehiculo: number;
    modelo: number;
    marca: string;
    constructor( idConductor: number,placa: string,numeroMotor: string,numeroChasis: string,
      toneladas: number,tipoVehiculo: number, modelo: number,marca: string, id?: number){
        this.id=id;
        this.idConductor=idConductor;
        this.placa=placa;
        this.numeroMotor=numeroMotor;
        this.numeroChasis=numeroChasis;
        this.toneladas=toneladas;
        this.tipoVehiculo=tipoVehiculo;
        this.modelo=modelo;
        this.marca=marca;
    }
}
