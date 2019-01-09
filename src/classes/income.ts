export class IncomeSource {
    _id:string;
    name:string;
}
export class Income {
    description:string;
    date:Date;
    amount:number;
    category:  IncomeSource;
}