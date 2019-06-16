import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private http:HttpClient){
    this.http.get
    ("https://5cdd0a92b22718001417c19d.mockapi.io/api/users"
    ).toPromise()
    .then((response)=>{
      this.userlist = response;
      console.log(this.userlist);
    }, (error) =>{
      console.log(error)
    })
  }
}
