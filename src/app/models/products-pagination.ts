import { Product } from "./product";

export interface ProductsPagination {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
