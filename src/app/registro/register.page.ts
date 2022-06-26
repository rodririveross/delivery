import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioRegistro: FormGroup;
  constructor(private fb:FormBuilder ,public alertController:AlertController ) { 
    this.formularioRegistro =this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionpassword': new FormControl("",Validators.required),
    });
  }
     
  ngOnInit() {
  }


  async registrar(){
       if (this.formularioRegistro.valid){

      const alert1 = await this.alertController.create({
        header: 'Datos Completados',
        message :'Usuario Registrado Correctamente ',
        buttons:['Aceptar'],

      });
     }
       console.log("Registrado");
    
       var f =this.formularioRegistro.value;

       
      

    if (this.formularioRegistro.invalid){

      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message :'Completar todos los campos',
        buttons:['Aceptar'],

      });
      await alert.present();
      return;
    }
    var usuario ={
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
     
   
   
}
  }
