import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('textColorInput') textColorInput!: ElementRef;
  @ViewChild('bgColorInput') bgColorInput!: ElementRef;

  @ViewChild('DOMElement') div!: ElementRef;

  onChange() {
    const textColor = this.textColorInput.nativeElement.value;
    const bgColor = this.bgColorInput.nativeElement.value;
    this.div.nativeElement.style = `color: ${textColor}; background-color:${bgColor};`;
  }
}
