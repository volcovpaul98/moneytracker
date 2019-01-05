export class IncomeSource {
    name:string;
}
export class Income {
    description:string;
    date:Date;
    amount:number;
    category:  IncomeSource;
}