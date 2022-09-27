import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  user: User | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/user.json').subscribe({
      next: (data: any) => (this.user = new User(data.name, data.age)),
    });
  }
}
