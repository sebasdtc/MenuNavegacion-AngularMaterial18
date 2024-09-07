import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContratosComponent } from './contratos/contratos.component';
import { CargosComponent } from './cargos/cargos.component';
import { UsuariosComponent } from './mantenedor/pages/usuarios/usuarios.component';
import { PermisosComponent } from './mantenedor/pages/permisos/permisos.component';
import { RolesComponent } from './mantenedor/pages/roles/roles.component';

export const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {
    path: 'mantenedor',
    children: [
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'permisos', component: PermisosComponent},
      {path: 'roles', component: RolesComponent},
      {path: '', redirectTo: 'usuarios', pathMatch: 'full'}
    ]
  },
  {path:'contratos', component:ContratosComponent},
  {path:'cargos', component:CargosComponent},
  {path:'**', component:DashboardComponent}

];
