import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FavItem } from "../models/fav-item.model";
import { map } from "rxjs/operators";
import { setTokenAutoRefreshEnabled } from "firebase/app-check";
@Injectable({
    providedIn: 'root'
})
export class favService{
    private  items$ = new BehaviorSubject<FavItem[]>([]);
    getfav(){
        return this.items$.asObservable();    
    }

  /* agregar a favoritos*/
  addToCart(newItem: FavItem){
    this.items$.next([...this.items$.getValue(), newItem]);
  }
    /* agregar el  favorito*/
  removeItem(id: number){
    this.items$.next(this.items$.getValue().filter(item => item.id !== id));
  }
  /* cantidad favorito*/
  changeQty(quantity: number, id: number){
    const items= this.items$.getValue();
    const index= items.findIndex((item) =>item.id ==id);
    items[index].quantity+= quantity;
    this.items$.next(items);
  }


 
}