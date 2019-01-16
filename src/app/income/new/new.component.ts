import { Component, OnInit } from '@angular/core';
import { Income } from 'src/classes/income';
import { IncomepostService } from 'src/app/incomepost.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  income: Income = new Income();
  constructor(private incomeService: IncomepostService) { }

  ngOnInit() {
  }
  onIncomeSubmit(income: Income) {
    this.incomeService.saveIncome(income).subscribe(x => {
      console.log(income);
    })
  }
}
