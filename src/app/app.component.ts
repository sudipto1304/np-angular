import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Nils Photography';

  public constructor(private titleService: Title ) { }

  ngOnInit() {
    this.setTitle(this.title);
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }


}
