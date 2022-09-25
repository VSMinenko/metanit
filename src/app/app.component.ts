import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'metanit';
  clicks: number = 0;
  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }
}
