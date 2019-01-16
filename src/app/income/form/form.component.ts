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
  income: Income;

  @Output()
  onIncomeSubmit: EventEmitter<Income> = new EventEmitter();

  incomeForm: FormGroup;
  incomePostService: IncomepostService;
  incomeSourcesList: IncomeSource[] = [];
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  public model: any = { date: { year: 2109, month: 1, day: 9 } };


  constructor(private fb: FormBuilder, private incomeservice: IncomeService) {
   
  }


  onSubmit() {
    this.income = this.incomeForm.value;
    this.onIncomeSubmit.emit(this.income);
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

    this.incomeForm =this.fb.group({
      description: [this.income.description],
      amount: [this.income.amount],
      category: [this.income.category],
      myDate: [{ date: { year: 2019, month: 1, day: 9 } },]
    })

  }
}