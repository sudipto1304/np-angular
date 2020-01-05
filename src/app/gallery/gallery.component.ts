import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private galleries = [];

  constructor(private _galleryService : GalleryService) { }

  ngOnInit() {
    this._galleryService.getGalleryData().subscribe(data => this.galleries = data);
  }

}
