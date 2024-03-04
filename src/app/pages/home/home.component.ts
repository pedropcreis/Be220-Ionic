import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonList, IonAvatar, IonItem, IonLabel, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { HorizontalScrollComponent } from 'src/app/components/horizontal-scroll/horizontal-scroll.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButton, IonList, IonAvatar, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonItem, IonLabel, IonButtons, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge, HeaderComponent, HorizontalScrollComponent],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
