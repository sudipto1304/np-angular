import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { InstaPost } from '../model/insta';
import { Observable, throwError } from 'rxjs';
import { QueryData } from '../model/query';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  data : Observable<string>;
  private _url : string = "http://service.nils-photography.com/service/sendQuery.php";
  myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  body = new HttpParams();
  constructor(private http : HttpClient) { }

  public sendEmail(query : QueryData) : Observable<any>{
    this.body = this.body.set('name', query.name);
    this.body = this.body.set('email', query.email);
    this.body = this.body.set('mobile', query.mobile);
    this.body = this.body.set('message', query.message);
    this.data =   this.http.post<any>(this._url, this.body, {headers: this.myheader});
    return this.data;

  }

  
}
