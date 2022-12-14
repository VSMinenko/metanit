import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [DataService, LogService],
})
export class ServicesComponent implements OnInit {
  newItem: string = '';
  items: string[] = [];
  constructor(private dataService: DataService) {}

  addItem(name: string) {
    this.dataService.addData(name);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
