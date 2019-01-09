import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormComponent } from './income/form/form.component';
import { Observable } from 'rxjs';
import { IncomeSource } from 'src/classes/income';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  http: Http;

  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692b66292476821c9d03",
    "cache-control": "no-cache"
  };

  incomeUrl: string = "https://moneytracker-6be9.restdb.io/rest/incomecategory";
  incomeservice: FormComponent;
  constructor(http: Http) {
    this.http = http;
  }
  getIncomes(): Observable<IncomeSource[]> {
    var mapOfIncome = map((response: Response) => {
      return response.json();
    })
    return mapOfIncome(this.http.get(this.incomeUrl, { headers: this.headers }));
  }
}
