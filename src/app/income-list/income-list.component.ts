import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/classes/expense';
import { IncomepostService } from '../incomepost.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  expenseList: Expense[];

  constructor(private incomepostservice:IncomepostService) { }

  ngOnInit() {
    this.getIncomeList();
  }
  getIncomeList() {
    this.incomepostservice.getAll().subscribe(res =>{
      this.expenseList=res;
    })
  }
}
