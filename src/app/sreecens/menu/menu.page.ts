import { Component, OnInit } from '@angular/core';
import { getEnabledCategories } from 'trace_events';
import { Category } from '../../models/category.models';
import { FoodService } from '../../services/food.service';
import {Food} from'src/app/models/food.model';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { NavController } from '@ionic/angular';
import { FoodCardComponent } from 'src/app/componentes/food-card/food-card.component';
import { CartItemModule } from 'src/app/componentes/cart-item/cart-item.module';

@Component({
  selector: 'app-home',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class menupage implements OnInit{
Categories: Category[]=[]; 
foods: Food[]=[]; 
buscado= [];
  constructor(private foodService: FoodService , private router: Router , public navCtrl: NavController) {}
  ngOnInit() {
    this.getcategorias();
    this.foods =this.foodService.getFoods();
  }
  //CATEGORIAS//
    getcategorias(){
      
     this.Categories=[
        {
          id:1,
          label:'Todos',
          image:'assets/images/icon/plato.png',
          active: true
        },
        {
          id:2,
          label:'Burger',
          image:'assets/images/icon/hamburguesa.png',
          active: true

        },
        {
          id:3,
          label:'Pizzas',
          image:'assets/images/icon/pizza.png',
          active: true

        },
        {
          id:4,
          label:'Pancho',
          image:'assets/images/icon/panchos.png',
          active: true

        },
        {
          id:5,
          label:'Tacos',
          image:'assets/images/icon/tacos.png',
          active: true

        },
      ]
    }
  

goToDetallePage(id: number){
  this.router.navigate(['detalle', id]);
}
 categories(id: number){
  this.router.navigate(['menu',id ]);
 }
// busqueda de productos
 buscar(event){
  const val  =event.target.value
   if(val && val.trim()!='')
   {
     console.log(val);
     this.buscado= this.foods.filter((item) =>{
       console.log(item);
       return (item.titule.toLowerCase().indexOf(val.toLowerCase()) >-1 );
     });
   }else{

    this.buscado= this.foods;
   }
   console.log(this.buscado);
 }

}

