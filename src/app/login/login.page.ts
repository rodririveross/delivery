import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { userInfo } from 'os';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    formulariologin: FormGroup;
    isLogger: boolean;
     
  constructor(public fb: FormBuilder , public alertController: AlertController) {
    this.formulariologin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }
 async ingresar(){
   var f = this.formulariologin.value;
   var usuario = JSON.parse(localStorage.getItem('usuario'));
   if (usuario.nombre ==f.nombre && f.password == f.password){
   console.log ('Ingresado');
   this.isLogger= true;
 } else {
  const alert = await this.alertController.create({
    header: 'Datos Incorrecto',
    message :'Los datos Ingresados Son Incorrectos',
    buttons:['Aceptar'],

  });
  await alert.present();
 }
}
}
