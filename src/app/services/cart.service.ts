import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/cart-item.model";
import { map } from "rxjs/operators";
import { setTokenAutoRefreshEnabled } from "firebase/app-check";
@Injectable({
    providedIn: 'root'
})
export class CartService{
    private  items$ = new BehaviorSubject<CartItem[]>([]);
    getCart(){
        return this.items$.asObservable();    
    }

  /* agregar al carrito*/
  addToCart(newItem: CartItem){
    this.items$.next([...this.items$.getValue(), newItem]);
  }
    /* agregar el producto*/
  removeItem(id: number){
    this.items$.next(this.items$.getValue().filter(item => item.id !== id));
  }
  /* cantidad producto*/
  changeQty(quantity: number, id: number){
    const items= this.items$.getValue();
    const index= items.findIndex((item) =>item.id ==id);
    items[index].quantity+= quantity;
    this.items$.next(items);
  }

 /* total producto*/
 getTotalAmount(){
  return this.items$.pipe(map(items =>{
 let total =0;
 items.forEach((item) =>{
   total+= item.quantity* item.price;
 });
  return total;
  }))
 }
}