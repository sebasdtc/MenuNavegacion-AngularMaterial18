import { Component, inject } from '@angular/core';

// Angular material
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

// Proyecto
import { Usuario } from '../../../../interfaces/usuario';


@Component({
  selector: 'app-usuario-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './usuario-dialog.component.html',
})
export class UsuarioDialogComponent {

  usuarioForm: FormGroup;
  titulo?:string;

  roles:Array<{ id: number; nombre: string }> = [
    {id:1, nombre:'Administrador'},
    {id:2, nombre:'Almacen'},
    {id:3, nombre:'Validador'},
    {id:4, nombre:'Empleado'},
  ];

  readonly fb = inject(FormBuilder);
  readonly dialogRef = inject(MatDialogRef<UsuarioDialogComponent>);
  readonly data = inject<Usuario>(MAT_DIALOG_DATA);

  constructor() {
    this.usuarioForm = this.fb.group({
      nombreUsuario: new FormControl(this.data.nombreUsuario, [Validators.required]),
      clave: new FormControl(this.data.clave, [Validators.required]),
      idRol: new FormControl(this.data.idRol, [Validators.required]),
    });
  }

  ngOnInit() : void {
    console.log(this.data.id);
    if (this.data.id === undefined) {
      this.titulo = 'Nuevo'
    }
    else {
      this.titulo = 'Editar';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.usuarioForm.valid) {
      this.data.nombreUsuario = this.usuarioForm.value.nombreUsuario;
      this.data.clave = this.usuarioForm.value.clave;
      this.data.idRol = this.usuarioForm.value.idRol;
      this.dialogRef.close(this.data);
    }
  }
}
