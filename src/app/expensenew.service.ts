import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Expense } from 'src/classes/expense';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensenewService {
  http: Http;

  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692b66292476821c9d03",
    "cache-control": "no-cache"
  };

  expenseNewUrl: string = "https://moneytracker-6be9.restdb.io/rest/expense";

  constructor(http: Http) {
    this.http = http;
  }
  saveExpense(expense: Expense): Observable<Response> {
    console.log(expense);
    return this.http.post(this.expenseNewUrl, expense, { headers: this.headers });
  }
  getAll(): Observable<Expense[]> {
    var mapToIncome = map((res: Response) => {
      return res.json();
    });

    return mapToIncome(this.http.get(this.expenseNewUrl, { headers: this.headers }));
  }
  deleteExpense(id: string): Observable<Response> {
    return this.http.delete(this.expenseNewUrl + '/' + id, { headers: this.headers });
  }
  update(id: string, expense: Expense): Observable<Response> {
    return this.http.put(this.buildUrl(id), expense, { headers: this.headers });
  }

  getById(id: string): Observable<Expense> {
    var mapToCar = map((res: Response) => {
      return res.json();
    });

    return mapToCar(this.http.get(this.buildUrl(id), { headers: this.headers }));
  }
  private buildUrl(id: string): string {
    return this.expenseNewUrl + "/" + id;
  }

}
