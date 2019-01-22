import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Income } from 'src/classes/income';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isObject } from 'util';


@Injectable({
  providedIn: 'root'
})
export class IncomepostService {
  http: Http;

  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692b66292476821c9d03",
    "cache-control": "no-cache"
  };

  incomePostUrl: string = "https://moneytracker-6be9.restdb.io/rest/income";

  constructor(http: Http) {
    this.http = http;
  }
  saveIncome(income: Income): Observable<Response> {
    return this.http.post(this.incomePostUrl, income, { headers: this.headers });
  }

  getAll(): Observable<Income[]> {
    var mapToIncome = map((res: Response) => {
      return res.json();
    });

    return mapToIncome(this.http.get(this.incomePostUrl, { headers: this.headers }));
  }
  getIncomeById(id: string): Observable<Income> {
    var mapToIncome = map((res: Response) => {
      return res.json();
    })
    return mapToIncome(this.http.get(this.incomePostUrl + '/' + id, { headers: this.headers }));
  }
  editIncomePost(id: string, income: Income): Observable<Response> {
    return this.http.put(this.incomePostUrl + '/' +id, income, { headers: this.headers });
  }
}
