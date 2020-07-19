import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created!";
  serverName = "rrr";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "one server created." + this.serverName;
  }

  setServerName(event: any) {
    
    this.serverName = event.target.value;
  }

}
