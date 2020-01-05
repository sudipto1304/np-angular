import { Component, OnInit } from '@angular/core';
import { InstapostService } from '../service/instapost.service';

@Component({
  selector: 'app-instagrampost',
  templateUrl: './instagrampost.component.html',
  styleUrls: ['./instagrampost.component.css']
})
export class InstagrampostComponent implements OnInit {

  private instaPosts = [];

  constructor(private _instaService : InstapostService) { }

  ngOnInit() {
    this._instaService.getInstagramPost().subscribe(data => this.instaPosts = data);
    console.log(this.instaPosts);
  }

}
