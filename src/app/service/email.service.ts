import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { InstaPost } from '../model/insta';
import { Observable } from 'rxjs';
import { QueryData } from '../model/query';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _url : string = "http://service.nils-photography.com/service/sendQuery.php";
  myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  body = new HttpParams();
  constructor(private http : HttpClient) { }

  public sendEmail(query : QueryData) : Observable<string>{
    this.body = this.body.set('name', query.name);
    this.body = this.body.set('email', query.email);
    this.body = this.body.set('mobile', query.mobile);
    this.body = this.body.set('message', query.message);
    return this.http.post<string>(this._url, this.body, {headers: this.myheader});
  }
}
