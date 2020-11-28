import { Injectable } from '@angular/core';
import { LoginPayload } from './auth/login-payload';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseurl ="http://localhost:8000/"; 

  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) { }

  login(loginPayload:LoginPayload):Observable<boolean> {
    let headers :HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.post(this.baseurl +'WePunekar.com/login',loginPayload, {headers:headers}).pipe(map(data =>{
      this.localStorageService.store('loginData',data);
      return true;
  
    }));
  }

  isAuthenticated():boolean{
    return this.localStorageService.retrieve('loginData') !=null;
  }


}
