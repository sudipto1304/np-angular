import { Component, OnInit } from '@angular/core';
import { QueryData } from '../model/query';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  query = new QueryData();
  response : string;

  constructor(private emailService : EmailService) { }

  ngOnInit() {
  }

  submitQuery(){
    console.log(this.query.name);
    console.log(this.query.mobile);
    console.log(this.query.email);
    console.log(this.query.message);
    this.emailService.sendEmail(this.query).subscribe(data=>this.response = data);
  }

}
