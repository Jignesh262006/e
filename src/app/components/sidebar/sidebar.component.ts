import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../service/toggle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  showSidebar: boolean = false;
  constructor(private toggle: ToggleService) { }
  ngOnInit(): void {
    this.toggle.getSidebarState().subscribe(value => {
      this.showSidebar = value;
    });
  }
  closeModal() {
    this.toggle.setSidebarState(false);
  }
}
