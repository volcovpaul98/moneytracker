import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/classes/expense';
import { ExpensenewService } from 'src/app/expensenew.service';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.css']
})
export class New2Component implements OnInit {

  expense: Expense = new Expense();
  constructor(private expenseSerivce: ExpensenewService) { }

  ngOnInit() {
  }

  onExpenseSubmit(expense: Expense) {
    this.expenseSerivce.saveExpense(expense).subscribe(x => {
      console.log(expense);
    })
  }
}
