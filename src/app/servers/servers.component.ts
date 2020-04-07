import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'server was created and name is ' + this.serverName;
  }
}
