import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  name:string = "ma";
  constructor() {
    this.changeName("ml")
    console.log("construct.")
  }
  changeName(name:string):void {
    this.name = name;
  }
}
