export interface Order{
  _id: string;
  orderItems: OrderItems[];
  shipingAddress1:string;
  shipingAddress2:string;
  city:string;
  zip:string;
  country:string;
  phone:string;
  user:any;
  status: string;
  totalPrice: number;
  dateOrdered: string;

}
export interface OrderItems{
  quantity: number;
  product: any
}