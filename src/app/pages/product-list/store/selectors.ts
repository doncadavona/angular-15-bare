// Selector

import { createFeatureSelector } from '@ngrx/store';
import { Product } from 'src/app/models/product';
 
export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
