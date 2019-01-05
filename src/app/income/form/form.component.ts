import { Component, OnInit } from '@angular/core';
import { Income } from 'src/classes/income';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 income: Income =  new Income();
 date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }
  constructor() { }

  ngOnInit() {
  }

}
