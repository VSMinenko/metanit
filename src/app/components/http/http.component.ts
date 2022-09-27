import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HttpService],
})
export class HttpComponent implements OnInit {
  users: User[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getData()
      .subscribe({ next: (data: any) => (this.users = data['userList']) });
  }
}
