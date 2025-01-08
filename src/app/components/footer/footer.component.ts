import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showDropDown = false;

 onShowDropMenu() {
  console.log("hi")
  if(this.showDropDown === true){

    this.showDropDown = false
  }
  else if(this.showDropDown===false){
this.showDropDown=true
  }
  }
}
