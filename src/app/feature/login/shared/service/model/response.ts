import { Usuario } from "./usuario";

export class Response {
    timestamp:number;
    data:Usuario;
    responseCode:number;
    status:string;
    constructor(
        timestamp?:number,
        data?:Usuario,
        responseCode?:number,
        status?:string,
    ){
        this.timestamp=timestamp;
        this.data=data;
        this.responseCode=responseCode;
        this.status=status;
    }
}