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
      icon: '../../../assets/icon/add-outline.svg',
      type: 'personal_online',
      options: [
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Fmusculacao-01.webp?alt=media&token=7ea738c0-2e51-4fc2-83a6-4b0aa163b24a',
          last_opened: false,
          label1: 'NOVO',
          label2: 'TREINO',
          subtitle: '',
          icon: '../../../assets/icon/add-outline.svg',
        },
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Fmusculacao-01.webp?alt=media&token=7ea738c0-2e51-4fc2-83a6-4b0aa163b24a',
          last_opened: false,
          label1: 'NOVO',
          label2: 'TREINO',
          subtitle: '',
          icon: '../../../assets/icon/add-outline.svg',
        },
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Fmusculacao-01.webp?alt=media&token=7ea738c0-2e51-4fc2-83a6-4b0aa163b24a',
          last_opened: false,
          label1: 'NOVO',
          label2: 'TREINO',
          subtitle: '',
          icon: '../../../assets/icon/add-outline.svg',
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
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Fmusculacao-02.webp?alt=media&token=466b891a-e343-47b1-971b-6b01da2b4d62',
          last_opened: true,
          label1: 'continuar treinando',
          label2: 'LEVANTAMENTO DE PESO',
          subtitle: '',
          icon: '',
        },
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Fmusculacao-02.webp?alt=media&token=466b891a-e343-47b1-971b-6b01da2b4d62',
          last_opened: false,
          label1: '',
          label2: 'YOGA',
          subtitle: '',
          icon: '',
        },
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Fmusculacao-02.webp?alt=media&token=466b891a-e343-47b1-971b-6b01da2b4d62',
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
      icon: '../../../assets/icon/add-outline.svg',
      type: 'blog',
      options: [
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Forange-color.webp?alt=media&token=b709eceb-7f65-4e3f-aff0-60dcef8668f7',
          last_opened: false,
          label1: '',
          label2: '',
          subtitle: '',
          icon: '',
        },
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Forange-color.webp?alt=media&token=b709eceb-7f65-4e3f-aff0-60dcef8668f7',
          last_opened: false,
          label1: '',
          label2: '',
          subtitle: '',
          icon: '',
        },
        {
          image_url: 'https://firebasestorage.googleapis.com/v0/b/teste-c55e6.appspot.com/o/images%2Forange-color.webp?alt=media&token=b709eceb-7f65-4e3f-aff0-60dcef8668f7',
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
