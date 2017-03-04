import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private fmostrar = false;
  private elementos = ['A' ,'B' ,'C' ,'D' ,'E' ];
  private valor="5"; // Viernes

  revelar(){
    this.fmostrar= !this.fmostrar;
  }
}
