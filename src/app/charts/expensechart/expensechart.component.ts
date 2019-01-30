import { Component, OnInit } from '@angular/core';
import { ExpensenewService } from 'src/app/expensenew.service';

@Component({
  selector: 'app-expensechart',
  templateUrl: './expensechart.component.html',
  styleUrls: ['./expensechart.component.css']
})
export class ExpensechartComponent implements OnInit {
// Doughnut
public doughnutChartLabels: string[];
public doughnutChartData: number[];
public doughnutChartType: string = 'doughnut';
allexpense = [];
// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}

constructor(private expenseChartServ: ExpensenewService) {

}
private getChartsData() {

  this.expenseChartServ.getAll().subscribe(res => {
    this.allexpense = res;
    var categories = [];
    var categoriesSum = [];
console.log(this.allexpense);
    for (var i = 0; i < this.allexpense.length; i++) {
      var currentCategory = this.allexpense[i].category.name;

      if (!categories.find(x => x == currentCategory)) {
        categories.push(this.allexpense[i].category.name);

        var expenses = this.allexpense.filter(x => x.category.name == currentCategory);
        var sum = expenses.reduce((acc, current) => acc + current.amount, 0);
        categoriesSum.push(sum);
      }
    }
  
    console.log(categoriesSum);
    
    this.doughnutChartLabels = categories;
    this.doughnutChartData = categoriesSum;
  });
}

ngOnInit() {
  this.getChartsData();
}

}
