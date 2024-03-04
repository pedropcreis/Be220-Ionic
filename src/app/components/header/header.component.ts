import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonList, IonAvatar, IonItem, IonLabel, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButton, IonList, IonAvatar, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonItem, IonLabel, IonButtons, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
