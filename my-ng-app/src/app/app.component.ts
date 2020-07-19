import { Component } from '@angular/core';
import { ServerComponent} from './server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: red;
    }
  `]
  
})
export class AppComponent {
  title = 'my-ng-app';
  desc = "hhha";
}
