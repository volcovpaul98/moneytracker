import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Income } from 'src/classes/income';
import { IncomepostService } from 'src/app/incomepost.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Output()
  EditIncomeOutput: EventEmitter<Income> = new EventEmitter();
  income: Income;
  incomeService : IncomepostService ;
  id: string;

  constructor( incomeService: IncomepostService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.incomeService = incomeService;
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.loadIncome();
   }

  ngOnInit() {
   
  }
  private loadIncome() {
    this.incomeService.getIncomeById(this.id).subscribe(x => {
      console.log(x);
      this.income = x;
    })
  }
  editIncome(income: Income): void {
    this.EditIncomeOutput.emit(this.income);
    this.incomeService.editIncomePost(this.id, income).subscribe(x => {
      console.log(x)
      this.loadIncome();
      this.router.navigate(['/edit-income']);


    });

  }

}