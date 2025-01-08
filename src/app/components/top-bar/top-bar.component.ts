import { Component } from '@angular/core';
import { ToggleService } from '../../service/toggle.service';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  constructor(private toggle: ToggleService) { }

  openSidebar() {
    this.toggle.setSidebarState(true);
    console.log('open', this.toggle.setSidebarState(true));

  }
}
