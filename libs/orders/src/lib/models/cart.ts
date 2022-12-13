import { Product } from '@cluntor/products';

export interface CartItem{
  product: Product,
  quantity: number
}

export interface CheckoutItem{
  id: string;
  quantity: number;
}