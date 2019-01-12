export class IncomeSource {
    _id:string;
    name:string;
}
export class Income {
    description:string;
    myDate:Date;
    amount:number;
    category:  IncomeSource;
}