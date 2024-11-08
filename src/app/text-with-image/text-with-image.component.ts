import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-with-image',
  templateUrl: './text-with-image.component.html',
  styleUrls: ['./text-with-image.component.css']
})
export class TextWithImageComponent implements OnInit {
  @Input() headline: string | undefined;
  @Input() text: string | undefined;
  @Input() quote: string | undefined;
  @Input() imagePath: string | undefined;
  @Input() headlineImagePath: string | undefined;
  @Input() orientationLeft = true;

  public innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  getDirection(): string {
    if (window.innerWidth > 768) {
      return this.orientationLeft ? 'row' : 'row-reverse';
    } else {
      return 'column';
    }
  }

  getTransformString(): string | undefined {
    return this.orientationLeft ? 'scaleX(-1);' : undefined;
  }
}
