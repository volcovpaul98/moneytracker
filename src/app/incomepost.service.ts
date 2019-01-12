import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Income } from 'src/classes/income';
import { Observable } from 'rxjs';


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

}
