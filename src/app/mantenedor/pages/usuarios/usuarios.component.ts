import {Component, inject, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Proyecto
import { Usuario } from '../../interfaces/usuario';
import { UsuarioDialogComponent } from './components/usuario-dialog/usuario-dialog.component';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatDividerModule,
    MatSlideToggleModule,
  ],
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'usuario', 'clave', 'esActivo', 'Rol', 'actions'];

  readonly dialog = inject(MatDialog);
  usuarioService = inject(UsuarioService);

  dataSource = new MatTableDataSource<Usuario>(this.usuarioService.getUsuarios());

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(usuario?:Usuario): void {
    if(usuario === undefined) {
      usuario = {
        nombreUsuario:'',
        clave:'',
      }
    }
    const dialogRef = this.dialog.open(UsuarioDialogComponent, {
      data: usuario,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Cuadro de dialogo cerrado');
      if (result !== undefined) {
        console.log("se recibio un dato:" + result);
        console.log(result);
      }
    });
  }

  deleteUsuarios(user: Usuario): void {
    // Implement your logic to delete the user
    console.log('Delete user:', user);
  }

  toggleEsActivo(element: any) {
    element.esActivo = !element.esActivo;
    // Aquí podrías hacer alguna lógica adicional, como actualizar el estado en el servidor
    // Guardar en la base de datos.
  }

}
