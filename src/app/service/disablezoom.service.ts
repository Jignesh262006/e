import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisableZoomService {

  constructor() { }

  disableZoom() {
    document.addEventListener('wheel', this.preventZoom, { passive: false });
    document.addEventListener('touchmove', this.preventPinchZoom, { passive: false });
  }

  private preventZoom(event: WheelEvent) {
    if (event.ctrlKey === true) {
      event.preventDefault();
    }
  }

  private preventPinchZoom(event: TouchEvent) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }
}
