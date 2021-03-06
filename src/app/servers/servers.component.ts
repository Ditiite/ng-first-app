import { Component, OnInit } from '@angular/core';

@Component({
  /** 
   * we can use selectr as one file there for we add it as stirng and in app...html we add -> <app-servers></app-servers>
   * OR
   * we can use as atttribute and then we are adding attributes in the array
   *    and in app....html file we add as following: <div app-servers></div>
   * OR 
   * we can select by class selector: '.app-servers',
   * and then in app...html we are using <div class="app-servers"></div>
   */
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',

  /**
   * component has to have an templete or templateUrl.
   * If we use HTML as external file, we add templateUrl
   * If we use HTML in this component we use template and back tick marks
   */
  // template: `
  //           <app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  show:boolean = true;
  log = [];

  // Assignment 23.Practicing databinding
  username = '';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  
  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggle() {
    this.show = !this.show;

    this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
