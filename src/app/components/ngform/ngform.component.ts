import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css'],
})
export class NgformComponent {
  name: string = '';
  email: string = '';
  phone: string = '';

  submit(form: NgForm) {
    console.log(form);
  }
}
