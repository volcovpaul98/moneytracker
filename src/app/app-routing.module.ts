import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './income/new/new.component';
import { New2Component } from './expense/new2/new2.component';
import { IncomeListComponent } from './income-list/income-list.component';




const routes: Routes = [
  { path: "income-new", component: NewComponent },
  { path: "expense-new", component: New2Component },
  { path: "income-list", component: IncomeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
