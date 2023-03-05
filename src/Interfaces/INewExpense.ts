export interface INewExpense {
  amount: number;
  category: ICategory;
  wallet: string;
  date: Date | string;
  note: string;
}

interface ICategory {
  name: string;
  image: any;
}
