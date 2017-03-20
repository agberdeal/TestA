import { HttpService } from './http.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent {
 
  items : any[] = [];
  constructor( private hs: HttpService){

  }

  onSubmit(username: string,email: string) {
    this.hs.sendData({username:username,email:email}).subscribe(
      (data: any) => console.log(data)
    );
  }

  onGetData(){
    this.hs.getOwnData().subscribe(
      data => {
        const myArray = [];
        for(let key in data) {
          myArray.push(data[key]);
        }
        this.items = myArray;
      }
    );
  }
}
