import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../service/toggle.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
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

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop; // Calculate offset
      window.scroll({
        top: top,
        behavior: 'smooth',
      });
    }
  }
}
