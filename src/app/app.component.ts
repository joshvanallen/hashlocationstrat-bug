import { Component, VERSION } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(router: Router){
    router.events.pipe(
      filter(value => value instanceof NavigationStart)
    ).subscribe({
      next: (value)=> {
        console.log(value);
      }
    })
  }
}
