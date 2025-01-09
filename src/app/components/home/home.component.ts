import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../service/toggle.service';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  seeMoreState = false
  seeMoreState1 = false
  seeMoreState2 = false
  faqs = [
    { question: 'What will be inside the Smart kit?', answer: 'The kit includes a combination of Smart retrofit switches, heavy-duty 16A smart\n' +
        'plug, and smart IR control hub depending on the type of kit selected to make your life\n' +
        'easier and make your home smarter.' },
    { question: 'What can I connect with the Smart switches?', answer: 'You can connect all the heavy appliances you usually connect to a plug on your\n' +
        'wall. Heavy appliances that work with an on/off status change like A.C., Geyser, Heater,\n' +
        'Microwave oven, etc can be easily connected and activated whenever you want with a\n' +
        'simple tap on Application.' },
    { question: 'Can I connect the E-Willow devices with Alexa or Google Assistant?', answer: 'Yes, devices are compatible with Alexa, Google Assistant and Siri via Shortcuts.' },
    { question: 'Do I need to keep the smart IR control hub in the same room?', answer: 'Yes, you need to keep the IR controller in the same room connected to the device.\n' +
        'This device sends infrared signals to be operated. But the commands are received from\n' +
        'your smartphone, Alexa or Google Assistant. As a result, you can manage the\n' +
        'connected devices from any location.' },
    { question: 'What is the range of the smart IR control hub and how many devices it can  connect?', answer: 'The Smart IR control hub works at 360 degrees and up to 8 meters in range. It can\n' +
        'connect up to 12 devices at a time.' },
    { question: 'Can I install the smart retrofit switches by myself?', answer: 'No, it requires opening of the switchboard and electrical connection has to be\n' +
        'done, so it is recommended to take electrician help to install the device. Electrician has\n' +
        'to follow simple steps mentioned in the instruction manual. Moreover, you can avail our\n' +
        'technician installation support (connect to check your service area).' },
    { question: 'Do I have to change my switchboard to install the intelligent retrofit  switches?', answer: 'No, you don’t need to change the switchboards. We bring you the perfect smart\n' +
        'retrofit solution that you can connect directly with your old switchboards and make it\n' +
        'smart. You don’t need any additional wiring.' },
  ];



  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }

  seeMore(name:any){
  if(name === 1){
    this.seeMoreState = !this.seeMoreState
  }

    if (name === 2) {
      this.seeMoreState1 = !this.seeMoreState1
    }

    if (name === 3) {
      this.seeMoreState2 = !this.seeMoreState2
    }
  }
}
