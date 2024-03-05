import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonList, IonAvatar, IonItem, IonLabel, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { HomeGrid } from 'src/app/interfaces/HomeGrids';
import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButton, IonList, IonAvatar, IonMenuButton, IonTitle, IonContent, IonIcon, IonButton, IonItem, IonLabel, IonButtons, IonText, IonChip, IonGrid, IonCol, IonRow, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, NgFor, NgIf, NgStyle],
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
          last_opened: false,
          label1: 'NOVO',
          label2: 'TREINO',
          subtitle: '',
          icon: 'add-outline',
        },
        {
          image_url: '../../../assets/images/musculacao-01.webp',
          last_opened: false,
          label1: 'NOVO',
          label2: 'TREINO',
          subtitle: '',
          icon: 'add-outline',
        },
        {
          image_url: '../../../assets/images/musculacao-01.webp',
          last_opened: false,
          label1: 'NOVO',
          label2: 'TREINO',
          subtitle: '',
          icon: 'add-outline',
        },
      ]
    },
    {
      title: 'PROGRAMAS',
      is_new: true,
      icon: '',
      type: 'programs',
      options: [
        {
          image_url: '../../../assets/images/musculacao-02.webp',
          last_opened: true,
          label1: 'continuar treinando',
          label2: 'LEVANTAMENTO DE PESO',
          subtitle: '',
          icon: '',
        },
        {
          image_url: '../../../assets/images/musculacao-02.webp',
          last_opened: false,
          label1: '',
          label2: 'YOGA',
          subtitle: '',
          icon: '',
        },
        {
          image_url: '../../../assets/images/musculacao-02.webp',
          last_opened: false,
          label1: '',
          label2: 'GINÁSTICA',
          subtitle: '',
          icon: '',
        },
      ]
    },
    {
      title: 'CONTEÚDOS',
      is_new: false,
      icon: 'add-outline',
      type: 'blog',
      options: [
        {
          image_url: '../../../assets/images/orange-color.webp',
          last_opened: false,
          label1: '',
          label2: '',
          subtitle: '',
          icon: '',
        },
        {
          image_url: '../../../assets/images/orange-color.webp',
          last_opened: false,
          label1: '',
          label2: '',
          subtitle: '',
          icon: '',
        },
        {
          image_url: '../../../assets/images/orange-color.webp',
          last_opened: false,
          label1: '',
          label2: '',
          subtitle: '',
          icon: '',
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {}

}
