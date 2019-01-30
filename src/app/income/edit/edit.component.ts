import { Component, OnInit } from '@angular/core';
import { Income } from 'src/classes/income';
import { IncomepostService } from 'src/app/incomepost.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  income:Income;
  id:string;

  constructor( private incomePostService:IncomepostService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.loadIncome();
  }
  private loadIncome(){
    this.incomePostService.getIncomeById(this.id).subscribe(x=>{
      this.income = x;
    })
  }
  update(income: Income): void {
    this.incomePostService.update(this.id, income).subscribe(x => {
      this.loadIncome();
      this.router.navigate(['/income-list']);
    });
  }

  }
