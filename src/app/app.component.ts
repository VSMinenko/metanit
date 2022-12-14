import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'metanit';
  items = ['Tom', 'Bob', 'Sam', 'Bill'];

  count: number = 5;

  condition: boolean = true;
  toggle() {
    this.condition = !this.condition;
  }
}
