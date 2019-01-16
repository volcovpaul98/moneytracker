export class ExpenseSource {
    _id:string;
    name:string;
}
export class Expense {
    description:string;
    amount:number;
    myDate:Date;
    category:  ExpenseSource;
}