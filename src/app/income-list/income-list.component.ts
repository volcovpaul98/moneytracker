import { Component, OnInit } from '@angular/core';
import { IncomepostService } from '../incomepost.service';
import { Income } from 'src/classes/income';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  incomeList: Income[];

  constructor(private incomepostservice: IncomepostService) { }

  ngOnInit() {
    this.getIncomeList();
  }
  private getIncomeList() {
    this.incomepostservice.getAll().subscribe(res => {
      this.incomeList = res;
    })
  }
  delete(id:string) {
    this.incomepostservice.deleteIncome(id).subscribe(x => {
      this.getIncomeList();
    })
}
