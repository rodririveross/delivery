import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-card',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit 
{
   cartItems$: Observable<CartItem[]>;
   totalAmount$: Observable<number>;
  constructor(private cartService: CartService, private  alertCtrl: AlertController) { }

  ngOnInit() {

    this.cartItems$= this.cartService.getCart();
    this.totalAmount$=this.cartService.getTotalAmount();
    }

    onIcrease(item: CartItem){

      this.cartService.changeQty(1, item.id);
      
    }
    onDecrease(item: CartItem){
      if(item.quantity==1)this.removeFromCart(item);
      else this.cartService.changeQty(-1, item.id);
    }
    async removeFromCart(item: CartItem){
     const alert= await this.alertCtrl.create({
      header:'Eliminar',
      message: 'Desea eliminar el producto',
      buttons:[
        {
          text: 'Si',
          handler: ()=>   this.cartService.removeItem(item.id)
        },
        {
          text: 'No',
          
        }
        ]

     });8
     alert.present();
   
    }

    
}
