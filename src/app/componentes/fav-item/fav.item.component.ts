import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavItem } from 'src/app/models/fav.item.model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './fav.item.component.html',
  styleUrls: ['./fav.item.component.scss'],
})
export class CartItemComponent  {

  @Input() item: FavItem;
 


}
