import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/classes/expense';
import { ExpensenewService } from '../expensenew.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenseList: Expense[];

  constructor(private expensenewserv: ExpensenewService) { }

  ngOnInit() {
    this.getExpenseList();
  }
  private getExpenseList() {
    this.expensenewserv.getAll().subscribe(res => {
      this.expenseList = res;
    })
  }


delete(id:string) {
  this.expensenewserv.deleteExpense(id).subscribe(x => {
    this.getExpenseList();
  })
}
}