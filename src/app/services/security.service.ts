import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.models';

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
        token : sessionData.data.token,
        isLogged: true
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
    return currentSession;
  }
  /**
   * Close session // cerrar sesion
   */
  logout(){
    localStorage.removeItem('session');
    this.setUserData(new UserModel());
  }
}