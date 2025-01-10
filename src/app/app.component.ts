import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DisableZoomService } from './service/disablezoom.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ewillow';

  constructor(private disableZoomService: DisableZoomService) {
  }

  ngOnInit() {
    this.disableZoomService.disableZoom();
  }
}
