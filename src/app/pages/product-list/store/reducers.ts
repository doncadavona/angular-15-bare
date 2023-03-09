import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import * as ProductActions from './actions';

export const initialState: Product[] = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
  },
  new Product({
    id: 1,
    title: "iPhone 14",
    description: "An apple mobile which exceeds all apples"
  }),
  new Product({
    id: 2,
    title: "Samsung Galaxy S22",
    description: "The phone that makes everyday epic"
  }),
];

export const productReducer = createReducer(
  initialState,
  on(ProductActions.getProductSuccess, (state, { products }) => ([...products])),
  // on(ProductActions.addProduct, (state, product) => state.concat(product)),
  // on(ProductActions.addProduct, state => ({ ...state, title: "iPhone 13"  })),
);