import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonList, IonAvatar, IonItem, IonLabel, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { HomeGrid } from 'src/app/interfaces/HomeGrids';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButton, IonList, IonAvatar, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonItem, IonLabel, IonButtons, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class HorizontalScrollComponent  implements OnInit {

  public title: string = 'Título';
  public data: HomeGrid[] = [
    {
      title: 'PERSONAL ONLINE',
      is_new: false,
      icon: 'add-outline',
      type: 'personal_online',
      options: [
        {
          image_url: '../../../assets/images/musculacao-01.webp',
          label: 'NOVO TREINO',
          subtitle: '',
          icon: 'add-outline',
        },
        {
          image_url: '../../../assets/images/musculacao-01.webp',
          label: 'NOVO TREINO',
          subtitle: '',
          icon: 'add-outline',
        },
        {
          image_url: '../../../assets/images/musculacao-01.webp',
          label: 'NOVO TREINO',
          subtitle: '',
          icon: 'add-outline',
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {}

}
