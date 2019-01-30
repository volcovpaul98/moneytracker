import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/classes/expense';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensenewService } from 'src/app/expensenew.service';


@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.css']
})
export class Edit2Component implements OnInit {
  expense:Expense;
  id: string;
 

  constructor(private expenseService: ExpensenewService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.loadExpense();
  }


  private loadExpense() {
    
    this.expenseService.getById(this.id).subscribe(x => {
  
      this.expense = x;
    });
  }

  update(expense: Expense): void {
    this.expenseService.update(this.id, expense).subscribe(x => {
      this.loadExpense();
      this.router.navigate(['/expense-list']);
    });
  }

}
