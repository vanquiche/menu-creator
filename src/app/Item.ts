import { Category } from "./Category";

export interface Item {
  id?: string,
  name: string,
  price: number,
  description: string,
  category: Category, //reference to Type
  listed: boolean,
  happyHour: boolean
}