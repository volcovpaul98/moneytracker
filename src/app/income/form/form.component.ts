import { Component, OnInit } from '@angular/core';
import { Income } from 'src/classes/income';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { IncomeService } from 'src/app/income.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  incomeForm: FormGroup;
  incomeservice: IncomeService;
  income: Income = new Income();
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  public model: any = { date: { year: 2109, month: 1, day: 9 } };


  constructor(fb: FormBuilder, incomeservice: IncomeService) {
    this.incomeservice = incomeservice;
    this.incomeForm = fb.group({
      description: [this.income.description,],
      amount: [this.income.amount],
      date: [this.income.date],
      category: [this.income.category],
      myDate: [{ date: { year: 2019, month: 1, day: 9 } },]
    })
  }


  onSubmit() {
    this.income = this.incomeForm.value;
    console.log(this.income);

  }
  getIncomes() {
    this.incomeservice.getIncomes().subscribe(response => {
      console.log(response);
    })
  }
  ngOnInit() {
    this.getIncomes();
  
  }

}
