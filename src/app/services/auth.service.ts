import { Injectable } from '@angular/core';
import { user, User } from '@angular/fire/auth';
import { authInstanceFactory } from '@angular/fire/auth/auth.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { async } from '@firebase/util';
import {AngularFirestore,AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import { GoogleAuthProvider, IdTokenResult} from 'firebase/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   public user$:Observable<User>;
   constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore){
 this.user$ =this.afAuth.authState.pipe(
   switchMap((user) => {
     if (user){
       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
     } 
       
    return of(null);
   })
 );
  
} 
 
  async resertPassword(email:string): Promise<void> {
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    } 
    catch(error){
     console.log('Error',error);
  }
}
  async loginGoogle(): Promise<User>{
    try{
      const {user}=await this.afAuth.signInWithPopup(new GoogleAuthProvider());
      /*this.updateUserData(user);*/
      return user;
    } catch(error){
      console.log('Error',error);
      }
     
  }

  //registracion usuario 
async register(email:string , password:string): Promise<User>{
try{
  const {user}=await this.afAuth.createUserWithEmailAndPassword(email,password);
  await this.sendVerifcationEmail();
  return user;
} catch(error){
  console.log('Error',error);
  }
  }
  
 //login de usuario 
  
async login (email:string , password:string):Promise<User>{
    try{
      const {user}=await this.afAuth.signInWithEmailAndPassword(email,password);
      /*this.updateUserData(user);*/
      return user;
    } catch(error){
      console.log('Error',error);
    }
  }

async sendVerifcationEmail(): Promise<void>{
  try{
    return(await this.afAuth.currentUser).sendEmailVerification();
  }
  catch(error){
  console.log('Error',error);
  }
}

  //deslogueo de usuario

async logout (): Promise<void>{
try{
  await this.afAuth.signOut();
}
catch(error){
console.log('Error',error);
}
  }
   
  /* private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    
    const data ={
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL
      
    };
    return userRef.set(data, {merge:true});
  }*/
  } 
 

