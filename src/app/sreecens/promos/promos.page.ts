import { asNativeElements, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { stringify } from 'querystring';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-maps',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage  {

title: string;
arryPromo:{ diasemana:string, promocion:string, imagenURL:string, descripcion: string}[];

  constructor() {

    this.title="Promociones ";
    this.arryPromo =[
      {
        "diasemana": "Lunes",
        "promocion":"PROMO 2x1 en Tacos Mexicanos ",
        "imagenURL":'../../assets/images/11.jpg',
        "descripcion":" Super Semana de Locura aprovecha esta promoción valida desde 27/06/22 al 02/07/22"

      },
      {
      "diasemana": "Martes",
      "promocion":" PROMO 2x1 en Burgers  ",
      "imagenURL":'../../assets/images/9.jpg',
      "descripcion":"Promo aprovecha esta promoción valida desde 25/06/22 al 30/06/22"
      },
      {
        "diasemana": "Miercoles",
        "promocion":"2x1 ",
        "imagenURL":'../../assets/images/11.jpg',
        "descripcion":"Super Semana de Locura aprovecha esta promoción valida desde 27/06/22 al 02/07/22"
        },
        {
          "diasemana": "Jueves y Viernes",
          "promocion":"Envios Gratis ",
          "imagenURL":'../../assets/images/10.jpg',
          "descripcion":"Pre Fin de Semana de Locura aprovecha esta promoción valida desdes 25/06/22 al 30/06/22"
          },
          {
            "diasemana": "Sabados y Domingos",
            "promocion":"2x1 en Pizza Familiares ",
            "imagenURL":'../../assets/images/8.jpg',
            "descripcion":"Fin de Semana de Locura aprovecha esta promoción valida desde 25/06/22 al 28/06/22"
         }
    
    ]
  }
}