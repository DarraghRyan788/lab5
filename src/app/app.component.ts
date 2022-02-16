import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  numberOfTime: number = 0;
  hidden=true;

  click() {
    this.numberOfTime++;
  }

  show(){
    if(this.hidden){
      this.hidden=false;
    }else{
      this.hidden = true;
    }
    

  }
}
