import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http:HttpClient) { }

  getmainlist(): Observable<any>{
    return this._http.get('http://localhost:3000/maintain/list');
  }
  
/*   addedlist():Observable<any>{
    return this._http.post('http://localhost:3000/eld/list/');
 }    */

 submitFormData(formData:any):Observable<any>{
  console.log("api call");
  console.log(formData);
  return this._http.post('http://localhost:3000/eld/list',formData);
 }

}
