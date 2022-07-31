import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';

@Component({
  selector: 'route-component',
  template: `<h1>{{message}}</h1>`,
})
class RouteComponent {
  message: string = 'Hello from Route Component';
  constructor(private route: ActivatedRoute) {
    this.message = route.snapshot.data['message'];
  }
}

const routes: Route[] = [
  {
    path: 'route-one',
    component: RouteComponent,
    data: {
      message: 'Hello from Route One Component',
    },
  },
  {
    path: 'route-two',
    component: RouteComponent,
    data: {
      message: 'Hello from Route Two Component',
    },
  },
  {
    path: 'route-three',
    component: RouteComponent,
    data: {
      message: 'Hello from Route Three Component',
    },
  },
  {
    path: '**',
    redirectTo: 'route-one',
  },
];

@Component({
  selector: 'route-links-component',
  template: `
    <ul><li *ngFor="let route of routes"><a [routerLink]="route.path">{{route.path}}</a></li></ul>
  `,
})
export class RouteLinksComponent {
  routes: Route[] = routes;
  constructor() {
    console.log('hi');
  }
}

@NgModule({
  declarations: [RouteComponent, RouteLinksComponent],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [{ provide: APP_BASE_HREF, useValue: '!' }],
  exports: [RouterModule, RouteLinksComponent],
})
export class AppRoutingModule {}
