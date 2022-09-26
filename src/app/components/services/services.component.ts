import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [DataService],
})
export class ServicesComponent implements OnInit {
  items: string[] = [];
  name: string = '';
  constructor(private dataService: DataService) {}

  addItem(name: string) {
    this.dataService.addData(name);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
