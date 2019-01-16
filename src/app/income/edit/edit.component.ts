import { Component, OnInit } from '@angular/core';
import { Income } from 'src/classes/income';
import { IncomepostService } from 'src/app/incomepost.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  income:Income;
  id:string;

  constructor( private incomePostService:IncomepostService) { }

  ngOnInit() {
  }
  private loadIncome(){
    this.incomePostService.getIncomeById(this.id).subscribe(x=>{
      this.income = x;
    })
  }
  // updateIncome(income:Income):void{
  //   this.incomePostService.update(this.id).subscribe(x=>{
  //     this.loadIncome();


  //   })

  }
}
