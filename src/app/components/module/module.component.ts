import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

export class Phone {
  constructor(
    public title: string,
    public price: number,
    public company: string
  ) {}
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent implements OnInit {
  title: string = '';
  price: number = 0;
  company: string = '';

  phone: Phone = new Phone('', 0, '');
  companies: string[] = [
    'Apple',
    'Huawei',
    'Xiaomi',
    'Samsung',
    'LG',
    'Motorola',
    'Alcatel',
  ];

  addPhone(title: NgModel, price: NgModel, comp: NgModel) {
    console.log(title);
    console.log(price);
    console.log(comp);
  }
  constructor() {}

  ngOnInit(): void {}
}
