import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent {
  @Input() headline: string | undefined;
  @Input() subtitle: string | undefined;

  /**
   *
   */
  constructor() {
    console.log(this.headline)
  }
}
