export interface Usuario {
  id?:number;
  nombreUsuario:string;
  clave:string;
  fechaCreacion?:Date;
  esActivo?:boolean;
  idRol?:number;
  rol?:string;
}
