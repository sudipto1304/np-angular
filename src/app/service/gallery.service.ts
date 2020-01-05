import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gallery } from '../model/gallery';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private _url : string = "../assets/data/galleryData.json";
  constructor(private http : HttpClient) { }

  public getGalleryData() : Observable<Gallery[]> {
    return this.http.get<Gallery[]>(this._url);
  }
}
