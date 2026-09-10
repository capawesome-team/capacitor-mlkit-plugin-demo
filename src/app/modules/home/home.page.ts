import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonRouterLink,
    IonTitle,
    IonToolbar,
    RouterLink,
  ],
})
export class HomePage {
  public plugins = [
    {
      name: 'Barcode Scanning',
      url: '/barcode-scanning',
    },
    {
      name: 'Digital Ink Recognition',
      url: '/digital-ink-recognition',
    },
    {
      name: 'Document Scanner',
      url: '/document-scanner',
    },
    {
      name: 'Entity Extraction',
      url: '/entity-extraction',
    },
    {
      name: 'Face Detection',
      url: '/face-detection',
    },
    {
      name: 'Face Mesh Detection',
      url: '/face-mesh-detection',
    },
    {
      name: 'Image Labeling',
      url: '/image-labeling',
    },
    {
      name: 'Language Identification',
      url: '/language-identification',
    },
    {
      name: 'Object Detection',
      url: '/object-detection',
    },
    {
      name: 'Pose Detection',
      url: '/pose-detection',
    },
    {
      name: 'Selfie Segmentation',
      url: '/selfie-segmentation',
    },
    {
      name: 'Smart Reply',
      url: '/smart-reply',
    },
    {
      name: 'Subject Segmentation',
      url: '/subject-segmentation',
    },
    {
      name: 'Text Recognition',
      url: '/text-recognition',
    },
    {
      name: 'Translation',
      url: '/translation',
    },
  ];

  constructor() {}
}
