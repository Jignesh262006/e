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
    {
      question: 'What will be inside the Smart kit?', answer: 'The kit includes a combination of Smart retrofit switches, heavy-duty 16A smart\n' +
        'plug, and smart IR control hub depending on the type of kit selected to make your life\n' +
        'easier and make your home smarter.'
    },
    {
      question: 'What can I connect with the Smart switches?', answer: 'You can connect all the heavy appliances you usually connect to a plug on your\n' +
        'wall. Heavy appliances that work with an on/off status change like A.C., Geyser, Heater,\n' +
        'Microwave oven, etc can be easily connected and activated whenever you want with a\n' +
        'simple tap on Application.'
    },
    { question: 'Can I connect the E-Willow devices with Alexa or Google Assistant?', answer: 'Yes, devices are compatible with Alexa, Google Assistant and Siri via Shortcuts.' },
    {
      question: 'Do I need to keep the smart IR control hub in the same room?', answer: 'Yes, you need to keep the IR controller in the same room connected to the device.\n' +
        'This device sends infrared signals to be operated. But the commands are received from\n' +
        'your smartphone, Alexa or Google Assistant. As a result, you can manage the\n' +
        'connected devices from any location.'
    },
    {
      question: 'What is the range of the smart IR control hub and how many devices it can  connect?', answer: 'The Smart IR control hub works at 360 degrees and up to 8 meters in range. It can\n' +
        'connect up to 12 devices at a time.'
    },
    {
      question: 'Can I install the smart retrofit switches by myself?', answer: 'No, it requires opening of the switchboard and electrical connection has to be\n' +
        'done, so it is recommended to take electrician help to install the device. Electrician has\n' +
        'to follow simple steps mentioned in the instruction manual. Moreover, you can avail our\n' +
        'technician installation support (connect to check your service area).'
    },
    {
      question: 'Do I have to change my switchboard to install the intelligent retrofit  switches?', answer: 'No, you don’t need to change the switchboards. We bring you the perfect smart\n' +
        'retrofit solution that you can connect directly with your old switchboards and make it\n' +
        'smart. You don’t need any additional wiring.'
    },
  ];


  missionText = `At the core of our mission is the drive to empower individuals and businesses by providing innovative smart gadgets, seamless software solutions, and expert support. We aim to help our customers embrace and thrive in a smarter, more connected world. After carefully studying global trends and market demands, we've crafted products that are not only easier to use but also more cost-effective than many alternatives available internationally. This unique blend of innovation and affordability allows us to reach a broad audience and make advanced technology accessible to everyone.
`;

  historyText = `Our journey began with a vision to bring smart technology to India, grounded in thorough research and valuable insights gained from observing the tech industry's rapid evolution worldwide. Understanding the growing demand for smart gadgets and the need to make them more accessible, we set out to create cutting-edge solutions that are user-friendly and affordable.
`;
  powerText = `As we’ve grown, we’ve gained recognition for our unwavering commitment to quality and accessibility. Our products have already begun positively impacting the lives of many users. Looking ahead, we’re excited about expanding our presence both within India and internationally. Our goal remains clear: to provide smart solutions that enhance everyday life and empower individuals and businesses to thrive in an increasingly connected future.
`;



  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }

  seeMore(section: number): void {
    if (section === 1) {
      this.seeMoreState = !this.seeMoreState;
    } else if (section === 2) {
      this.seeMoreState1 = !this.seeMoreState1;
    } else if (section === 3) {
      this.seeMoreState2 = !this.seeMoreState2;
    }
  }


  getTruncatedText(text: string, isExpanded: boolean): string {
    const words = text.split(' ');
    if (isExpanded || words.length <= 40) {
      return text;
    }
    return words.slice(0, 40).join(' ');
  }
}
