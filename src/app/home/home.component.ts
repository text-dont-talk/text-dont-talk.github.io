import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [
    {
      title: 'Keep It Simple',
      content: 'Text is quick, to the point, and efficient. Voice messages? Not so much.',
      visible: true
    },
    {
      title: 'Respect Time',
      content: 'Reading a short text takes seconds. Listening to a rambling voice message? Minutes.',
      visible: false
    },
    {
      title: 'Clear Communication',
      content: 'Written words provide clarity without the fluff.',
      visible: false
    }
  ];
}
