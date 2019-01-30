export class ExpenseSource {
    
    name:string;
}
export class Expense {
    _id:string;
    description:string;
    amount:number;
    myDate:Date;
    category:  ExpenseSource;
}