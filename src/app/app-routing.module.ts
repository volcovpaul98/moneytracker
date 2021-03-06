import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './income/new/new.component';
import { New2Component } from './expense/new2/new2.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { EditComponent } from './income/edit/edit.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { Edit2Component } from './expense/edit2/edit2.component';
import { IncomechartComponent } from './charts/incomechart/incomechart.component';
import { ChartComponent } from './charts/chart/chart.component';
import { ExpensechartComponent } from './charts/expensechart/expensechart.component';




const routes: Routes = [
  { path: "income-new", component: NewComponent },
  { path: "expense-new", component: New2Component },
  { path: "income-list", component: IncomeListComponent },
  { path: "edit-income/:id", component: EditComponent },
  { path: "expense-list", component: ExpenseListComponent },
  { path: "edit-expense/:id", component: Edit2Component },
  { path: "income-chart", component: IncomechartComponent },
  { path: "charts", component: ChartComponent },
  { path: 'expense-chart', component: ExpensechartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
