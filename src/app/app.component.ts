import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  /**
   * Can add style in both ways:
   *  1. as an external file
   *  2. as style array
   *  The IMPORTANT think is that both styles need to be array,
   *  as we can add alos multiple style sheets.
   *
      styles: [`
        h3 {
          color: dodgerblue;
        }
      `]
  */
})

export class AppComponent {
  
}
