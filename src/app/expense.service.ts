import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ExpenseSource } from 'src/classes/expense';
import { map } from 'rxjs/operators';
import { Form2Component } from './expense/form2/form2.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  http: Http;

  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692b66292476821c9d03",
    "cache-control": "no-cache"
  };

  expenseUrl: string = "https://moneytracker-6be9.restdb.io/rest/expensescategory  ";
  expenseservice: Form2Component;
  constructor(http: Http) {
    this.http = http;
  }
  getExpenseSources(): Observable<ExpenseSource[]> {
    var mapOfIncome = map((response: Response) => {
      return response.json();
    })
    return mapOfIncome(this.http.get(this.expenseUrl, { headers: this.headers }));
  }
}