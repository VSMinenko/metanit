import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
