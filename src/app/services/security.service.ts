import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChangePasswordModel } from '../models/security/change-password.model';
import { PasswordResetModel } from '../models/security/password-reset.model';
import { UserModel } from '../models/security/user.models';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel);

  constructor(
    private http: HttpClient
  ) { 
    this.verifyCurrentSession();
  }
  
  
  verifyCurrentSession(){
    let currentSession = this.getSessionData();
    if (currentSession) {
      this.setUserData(JSON.parse(currentSession));
    }
  }
  /**
   * Method to update user data
   * @param user user data
   */
  setUserData(user: UserModel){
    this.userData.next(user);
  }
  /**
   * get user data status
   */
  getUserData(){
    return this.userData.asObservable();
  }
  /**
   * 
   * @param customer METODO PARA ENVIAR LOS DATOS A NUESTRO SERVIDOR
   */
  LoginCustomer(user: UserModel): Observable<UserModel> {
    return this.http.post<any>(`login`,user,{
      headers : new HttpHeaders({})
  });
  }
  /**
   * 
   * @param user RESETEAR LA CONTRASEÑA
   */
  PasswordReset(data: PasswordResetModel): Observable<UserModel> {
    return this.http.post<any>(`password-reset`,data,{
      headers : new HttpHeaders({})
  });
  }
  /**
   * 
   * @param data CAMBIAR LA CONTRASEÑA
   * @returns
   */
  ChangePassword(data: ChangePasswordModel): Observable<UserModel> {
    return this.http.post<any>(`change-password`,data,{
      headers : new HttpHeaders({
        Authorization:`Bearer ${this.getToken()}`
      })
  });
  }
  /**
   * save session
   * @param sessionData user data and token 
   */
  saveSessionData(sessionData : any): Boolean {
    let currentSession = localStorage.getItem('session');
    if (currentSession){
      return false;
    }else{
      let data : UserModel = {
        id : sessionData.data.id,
        customerId : sessionData.data.customerId,
        username : sessionData.data.username,
        role : sessionData.data.role,
        token : sessionData.token,
        isLogged: true,
      };
      localStorage.setItem('session',JSON.stringify(data));
      this.setUserData(data);
      console.log(data);
      return true;
    }
  }
  /**
   * Return the current session data
   */
  getSessionData(){
    let currentSession = localStorage.getItem('session');
    return currentSession as any;
  }

  sessionExist(): Boolean{
    let currentSession = this.getSessionData();
    return (currentSession) ? true : false;
    
  }

  VerifyRoleInSession(roleId): Boolean {
    let currentSession = JSON.parse(this.getSessionData());
    return (currentSession.role == roleId);
  }

  getToken():String{
     let currentSession = JSON.parse(this.getSessionData());
     return currentSession.token;
  }
  getUserId():String{
    let currentSession = JSON.parse(this.getSessionData());
    return currentSession.id;
 }
  /**
   * Close session // cerrar sesion
   */
  logout(){
    localStorage.removeItem('session');   
    this.setUserData(new UserModel());
  }
}