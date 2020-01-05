import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstaPost } from '../model/insta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstapostService {

  private _url : string = "http://service.nils-photography.com/service/ImportInsta.php";

  constructor(private http : HttpClient) { }

  public getInstagramPost() : Observable<InstaPost[]>{
    return this.http.get<InstaPost[]>(this._url);
  }
}
