import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../service/toggle.service';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faqs = [
    { question: 'What will be inside the Smart kit?', answer: 'The kit includes a combination of Smart retrofit switches, heavy-duty 16A smart  plug, and smart IR control hub depending on the type of kit selected to make your life  easier and make your home smarter.' },
    { question: 'What can I connect with the Smart switches?', answer: 'show data' },
    { question: 'Can I connect the E-Willow devices with Alexa or Google Assistant?', answer: 'show data' },
    { question: 'Do I need to keep the smart IR control hub in the same room?', answer: 'show data' },
    { question: 'What is the range of the smart IR control hub and how many devices it can  connect?', answer: 'show data' },
    { question: 'Can I install the smart retrofit switches by myself?', answer: 'show data' },
    { question: 'Do I have to change my switchboard to install the intelligent retrofit  switches?', answer: 'show data' },
  ];



  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }
}
