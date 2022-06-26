import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { addListener } from 'cluster';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { FavItem } from 'src/app/models/fav-item.model';
import { favService } from 'src/app/services/star.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  id: number;
  food: Food ;

  constructor(private activatedRoute: ActivatedRoute,
     private foodService: FoodService,
     private cartService: CartService,
     private toastCtrl: ToastController,
     private favService: favService,
     ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);

  }
  
  addItemtocart(){
   const CartItem:CartItem={
    id: this.food.id,
    name: this.food.titule,
    price: this.food.price,
    image:this.food.image,
    quantity:1,
    
   };
   
   this.cartService.addToCart(CartItem);
   this.presentToast();
   
}
 async presentToast(){
  const toast =await this.toastCtrl.create({
    message: 'añadido al carrito',
    mode:'ios',
    duration :1000,
    position:'top',

  });
  toast.present();
 }
}


/*addItemToFav() {
  const CartFav :FavItem={
    id: this.food.id,
    name: this.food.titule,
    price: this.food.price,
    image:this.food.image,
    quantity:1,
}  
 this.favService.addIToFav(CartFav)
 this.presentToast()

 
};
*/

