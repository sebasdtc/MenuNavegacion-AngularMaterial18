// Angular
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

// Proyecto
import { MenuItem } from './menu-item';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ThemeManagerService } from '../../theme-manager.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MenuItemComponent
  ],
  templateUrl: './layout.component.html',

})
export class LayoutComponent {

  menuItems: MenuItem[] = [
    {label: 'Dashboard', icon: 'dashboard', routerLink: 'dashboard'},
    {
      label: 'Mantenedor',
      icon: 'settings',
      subItems: [
        {label: 'Usuarios', icon: 'people', routerLink: 'mantenedor/usuarios'},
        {label: 'Permisos', icon: 'lock', routerLink: 'mantenedor/permisos'},
        {label: 'Roles', icon: 'admin_panel_settings', routerLink: 'mantenedor/roles'},
      ]
    },
    {label: 'Contratos', icon: 'description', routerLink: 'contratos'},
    {label: 'Cargos', icon: 'work', routerLink: 'cargos'},
  ];

  private themeManager = inject(ThemeManagerService);
    theme = this.themeManager.theme;

    toggleTheme() {
      this.themeManager.toggleTheme();
    }
}
