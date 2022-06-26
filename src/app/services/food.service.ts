import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
  providedIn: 'root'
})
export class FoodService{
//ARTICULOS//
getFoods(): Food[]{
    return [
        {
            id:1,
            titule:'Asturians Burger',
            price: 500,
            image: 'assets/images/3.png',
            descritpion:'La hamburguesa que proponen en el Bowies parte de vacuno añojo y pan tipo cristal y lleva hasta trocitos de manzana',


        },
        {
            id:2,
            titule:'Dry Aged Burger',
            price: 700,
            image: 'assets/images/3.png',
            descritpion:'Dry Aged  Burger con esta propuesta que lleva carne de vaca rubia gallega, bacon y cheddar',


        },
        {
            id:3,
            titule:'Quinoas  Burger',
            price: 680,
            image: 'assets/images/3.png',
            descritpion:'Esta propuesta de Loving Food es vegana ',


        },
        {
            id:4,
            titule:'Pancho Delicioso',
            price:900,
            image: 'assets/images/1.png',
            descritpion:'Ingredientes: 4 unidades de salchicha alemana 4 flautas chicas de pan francés, de aprox. 20 cm con queso crema, mostaza de Dijion, panceta ahumada feteada',
            
        

        },
        {
            id:5,
            titule:'Pancho Parrilero',
            price:900,
            image: 'assets/images/1.png',
            descritpion:'Ingredientes: Salchicha parrilera,Pan para salchichas ,Salsa criolla,Chimichurri',

        },
        {
            id:6,
            titule:'Pancho Sabroso',
            price:900,
            image: 'assets/images/1.png',
            descritpion:'Ingredientes: 4 Salchicha, Pan para salchichas, Queso cheddar, Morrón asado, Aceitunas en rodajas, Vinagre de manzana',

        },
        {
            id:7,
            titule:'Pancho Capresse',
            price:900,
            image: 'assets/images/1.png',
            descritpion:'Ingredientes 3 Salchicha, Pan para salchichas,Mozzarella,Albahaca,Tomate',

        },
        {
            id:8,
            titule:'Pizza napolitana',
            price:1200,
            image: 'assets/images/2.png',
            descritpion:'piza de masa, tomate, queso muzzarella, rodajas de tomate natural, ajo y perejil picado',

        },
        {
            id:9,
            titule:'Pizza calabresa',
            price:1200,
            image: 'assets/images/2.png',
            descritpion:'pizza en donde el protagonismo se encuentra en la longaniza calabresa o chorizo seco, es una pizza un poco picante pero deliciosa',

        },


    ];
}
 getFood(id: number): Food {
    return this.getFoods().find((food) => food.id ==id);
 }
}
