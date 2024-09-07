import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor() { }

  ELEMENT_DATA: Usuario[] = [
    { id: 1, nombreUsuario: 'sebas', clave: '123', fechaCreacion: new Date('2023-10-19'), esActivo: true, idRol: 1, rol: 'Administrador' },
    { id: 2, nombreUsuario: 'maria', clave: '456', fechaCreacion: new Date('2023-11-01'), esActivo: false, idRol: 2, rol: 'Almacen' },
    { id: 3, nombreUsuario: 'juan', clave: '789', fechaCreacion: new Date('2023-12-10'), esActivo: true, idRol: 3, rol: 'Validador' },
    { id: 4, nombreUsuario: 'ana', clave: '321', fechaCreacion: new Date('2024-01-15'), esActivo: true, idRol: 4, rol: 'Empleado' },
    { id: 5, nombreUsuario: 'luisa', clave: '654', fechaCreacion: new Date('2024-02-20'), esActivo: false, idRol: 2, rol: 'Almacen' },
    { id: 6, nombreUsuario: 'pedro', clave: '987', fechaCreacion: new Date('2024-03-05'), esActivo: true, idRol: 1, rol: 'Administrador' },
    { id: 7, nombreUsuario: 'carla', clave: '741', fechaCreacion: new Date('2024-04-10'), esActivo: false, idRol: 3, rol: 'Validador' },
    { id: 8, nombreUsuario: 'jose', clave: '852', fechaCreacion: new Date('2024-05-25'), esActivo: true, idRol: 4, rol: 'Empleado' },
    { id: 9, nombreUsuario: 'laura', clave: '963', fechaCreacion: new Date('2024-06-15'), esActivo: true, idRol: 2, rol: 'Almacen' },
    { id: 10, nombreUsuario: 'roberto', clave: '159', fechaCreacion: new Date('2024-07-30'), esActivo: false, idRol: 1, rol: 'Administrador' },
    { id: 11, nombreUsuario: 'sofia', clave: '753', fechaCreacion: new Date('2024-08-10'), esActivo: true, idRol: 3, rol: 'Validador' },
    { id: 12, nombreUsuario: 'andres', clave: '258', fechaCreacion: new Date('2024-09-05'), esActivo: false, idRol: 4, rol: 'Empleado' },
    { id: 13, nombreUsuario: 'veronica', clave: '456', fechaCreacion: new Date('2024-10-20'), esActivo: true, idRol: 2, rol: 'Almacen' },
    { id: 14, nombreUsuario: 'felipe', clave: '654', fechaCreacion: new Date('2024-11-15'), esActivo: true, idRol: 3, rol: 'Validador' },
    { id: 15, nombreUsuario: 'marta', clave: '789', fechaCreacion: new Date('2024-12-10'), esActivo: false, idRol: 1, rol: 'Administrador' },
    { id: 16, nombreUsuario: 'julia', clave: '321', fechaCreacion: new Date('2025-01-05'), esActivo: true, idRol: 4, rol: 'Empleado' },
    { id: 17, nombreUsuario: 'martin', clave: '654', fechaCreacion: new Date('2025-02-20'), esActivo: false, idRol: 2, rol: 'Almacen' },
    { id: 18, nombreUsuario: 'patricia', clave: '987', fechaCreacion: new Date('2025-03-15'), esActivo: true, idRol: 3, rol: 'Validador' },
    { id: 19, nombreUsuario: 'camila', clave: '741', fechaCreacion: new Date('2025-04-30'), esActivo: true, idRol: 1, rol: 'Administrador' },
    { id: 20, nombreUsuario: 'nicolas', clave: '852', fechaCreacion: new Date('2025-05-25'), esActivo: false, idRol: 4, rol: 'Empleado' },
  ];

  getUsuarios() : Usuario[] {
    return this.ELEMENT_DATA;
  }
}
