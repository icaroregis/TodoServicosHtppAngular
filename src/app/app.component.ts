import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-burguer-list></app-burguer-list>
    <app-burguer-add></app-burguer-add>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TodoServicosHtppAngular';
}
