import { Component, input, signal } from '@angular/core';
import { MenuItem } from '../menu-item';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  item = input.required<MenuItem>();

  nestedMenuOpen = signal(false);


  toggleNested() :void {
    if(this.item().subItems) {
      this.nestedMenuOpen.set(!this.nestedMenuOpen());
    }
  }
}
