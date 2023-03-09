import { Product } from "./product";

export interface Products {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
