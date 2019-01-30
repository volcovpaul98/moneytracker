import { Component, OnInit } from '@angular/core';
import { IncomepostService } from 'src/app/incomepost.service';

@Component({
  selector: 'app-incomechart',
  templateUrl: './incomechart.component.html',
  styleUrls: ['./incomechart.component.css']
})
export class IncomechartComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string = 'doughnut';
  allincomes = [];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private incomeChartsServ: IncomepostService) {

  }
  private getChartsData() {

    this.incomeChartsServ.getAll().subscribe(res => {
      this.allincomes = res;
      var categories = [];
      var categoriesSum = [];

      for (var i = 0; i < this.allincomes.length; i++) {
        var currentCategory = this.allincomes[i].category.Name;

        if (!categories.find(x => x == currentCategory)) {
          categories.push(this.allincomes[i].category.Name);

          var incomes = this.allincomes.filter(x => x.category.Name == currentCategory);
          var sum = incomes.reduce((acc, current) => acc + current.amount, 0);
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
