import { Component, OnInit } from '@angular/core';
import { QueryData } from '../model/query';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  error : boolean = true;
  query = new QueryData();
  response : string;
  mailformat : string =  "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  phoneFormat : string =  "^[0-9]{10}$";
  constructor(private emailService : EmailService) { }

  ngOnInit() {
  }

  submitQuery(){
    if(!this.query.name){
      alert("Name is required");
    }else if(!this.query.mobile){
      alert("Contact Number is required");
    }else if(!this.query.email){
      alert("Email ID is required");
    }else if(!this.query.message){
      alert("Message is required");
    }else{
      if(!this.error){
        console.log(this.query.name);
        console.log(this.query.mobile);
        console.log(this.query.email);
        console.log(this.query.message);
        this.emailService.sendEmail(this.query).subscribe(data=>this.response = data);
        alert(this.response);
      }else{
        alert("Please correct the highlited error");
      }
    }
    
    
  }

  emailValidation($event){
    if($event.target.value.match(this.mailformat)){
      this.error=false;
      $event.target.classList.remove('text-error')
    }else{
      this.error=true;
      $event.target.classList.add('text-error')
    }
  }

  phoneValidation($event){
    let text = $event.target.value;
    if(text.length<10){
      this.error=true;
      $event.target.classList.add('text-error')
    }else{ 
      if(text.match(this.phoneFormat)){
        this.error=false;
        $event.target.classList.remove('text-error')
      }else{
        this.error=true;
        $event.target.classList.add('text-error')
      }
    }
  }

  

}
