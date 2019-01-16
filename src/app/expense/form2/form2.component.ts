import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseSource, Expense } from 'src/classes/expense';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExpenseService } from 'src/app/expense.service';
import { IMyDpOptions } from 'mydatepicker';
import { ExpensenewService } from 'src/app/expensenew.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  @Input()
  expense: Expense = new Expense();
  @Output()
  submit: EventEmitter<Expense> = new EventEmitter();

  expenseForm: FormGroup;
  expenseservice: ExpenseService;
  expenseNewService: ExpensenewService;
  expenseSourceList: ExpenseSource[] = [];
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  public model: any = { date: { year: 2109, month: 1, day: 9 } };


  constructor(fb: FormBuilder, expenseservice: ExpenseService) {
    this.expenseservice = expenseservice;


    this.expenseForm = fb.group({
      description: [this.expense.description],
      amount: [this.expense.amount],
      category: [this.expense.category],
      myDate: [{ date: { year: 2019, month: 1, day: 9 } },]
    })
  }


  onSubmit() {
    this.expense = this.expenseForm.value;
    this.submit.emit(this.expense);
    console.log(this.expense);

  }
  getExpense() {
    this.expenseservice.getExpenseSources().subscribe(response => {
      this.expenseSourceList = response;
      console.log(response);
    })
  }
  ngOnInit() {
    this.getExpense();

  }
  saveExpense(expense: Expense) {
    this.expenseNewService.saveExpense(expense).subscribe(x => {
      console.log(expense);
      this.getExpense();
    });
  }

}