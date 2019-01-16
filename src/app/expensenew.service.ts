import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Expense } from 'src/classes/expense';
import { Observable } from 'rxjs';

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
  
    expenseNewUrl: string = "https://moneytracker-6be9.restdb.io/rest/expense ";
  
    constructor(http: Http) {
      this.http = http;
    }
    saveExpense(expense: Expense): Observable<Response> {
      return this.http.post(this.expenseNewUrl, expense, { headers: this.headers });
    }
  
  }
  