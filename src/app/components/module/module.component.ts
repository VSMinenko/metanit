import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: string
  ) {}
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent {
  title: string = '';
  price: number = 0;
  company: string = '';

  user: User = new User('', '', '');
  addUser() {
    console.log(this.user);
  }
}
