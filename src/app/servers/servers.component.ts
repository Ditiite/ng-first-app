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
  template: `
            <app-server></app-server>
            <app-server></app-server>`,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
