import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Income, IncomeSource } from 'src/classes/income';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { IncomeService } from 'src/app/income.service';
import { IncomepostService } from 'src/app/incomepost.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input()
  income: Income = new Income();
  @Output()
  submit: EventEmitter<Income> = new EventEmitter();

  incomeForm: FormGroup;
  incomeservice: IncomeService;
  incomePostService: IncomepostService;
  incomeSourcesList: IncomeSource[] = [];
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  public model: any = { date: { year: 2109, month: 1, day: 9 } };


  constructor(fb: FormBuilder, incomeservice: IncomeService) {
    this.incomeservice = incomeservice;


    this.incomeForm = fb.group({
      description: [this.income.description],
      amount: [this.income.amount],
      category: [this.income.category],
      myDate: [{ date: { year: 2019, month: 1, day: 9 } },]
    })
  }


  onSubmit() {
    this.income = this.incomeForm.value;
    this.submit.emit(this.income);
    console.log(this.income);

  }
  getIncomes() {
    this.incomeservice.getIncomeSources().subscribe(response => {
      this.incomeSourcesList = response;
      console.log(response);
    })
  }
  ngOnInit() {
    this.getIncomes();

  }
  saveIncome(income: Income) {
    this.incomePostService.saveIncome(income).subscribe(x => {
      console.log(income);
      this.getIncomes();
    });
  }

}
