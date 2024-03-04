import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonApp, SideMenuComponent],
})
export class AppComponent {

  constructor() { }
}
