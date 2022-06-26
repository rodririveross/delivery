import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/models/food.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { favService } from 'src/app/services/star.service';
import { AlertController } from '@ionic/angular';
import { FavItem } from 'src/app/models/fav-item.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favItems$: Observable<FavItem[]>;
  constructor(private favService: favService, private  alertCtrl: AlertController ){}
 ngOnInit() {
  this.favItems$= this.favService.getfav();

    
  }
  async removeFromCart(item: FavItem){
    const alert= await this.alertCtrl.create({
     header:'Eliminar',
     message: 'Desea eliminar el producto',
     buttons:[
       {
         text: 'Si',
         handler: ()=>   this.favService.removeItem(item.id)
       },
       {
         text: 'No',
         
       }
       ]

    });
    alert.present();
  

}
}