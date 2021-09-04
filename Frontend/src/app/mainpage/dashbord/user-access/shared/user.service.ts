import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { User, UserData } from './user.model';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    fullName : '',
    email: '',
    password : ''
  };

  userauth :boolean;

  private auth = new BehaviorSubject<Boolean>(false);
  Auth = this.auth.asObservable();

  private fullname = new BehaviorSubject<string>('');
  FullName = this.fullname.asObservable();
  
  private user = new BehaviorSubject<string>('');
  UserId = this.user.asObservable();

  private userdata = new BehaviorSubject<object>([]);
  data = this.userdata.asObservable();
  

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor( public http: HttpClient ) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(environment.Apicall + '/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.Apicall + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get<User>(environment.Apicall + '/userProfile');
  }

  getData(selectedData : string):Observable<any>{
    const param1 = new HttpParams().set('email',selectedData);
    return this.http.get(environment.Apicall + '/getdata',{ params: param1 });
  }

  postData(data: UserData){
    return this.http.post(environment.Apicall + '/data',data);
  }

  clearallData(){
    return this.http.delete(environment.Apicall + '/data/all/0');
  }
  
  clearData(id : string){
    return this.http.delete(environment.Apicall + '/data/'+id);
  }

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
    {
      return null;
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
    {
      return userPayload.exp > Date.now() / 1000;
    }else
    {
      return false;
    }
  }

  changeAuth(msg : boolean){
    this.auth.next(msg);
  }
  changeUserId(msg : string){
    this.user.next(msg);
  }
  changeFullName(msg : string){
    this.fullname.next(msg);
  }
  changeUserdata(msg : object){
    this.userdata.next(msg);
  }

}
