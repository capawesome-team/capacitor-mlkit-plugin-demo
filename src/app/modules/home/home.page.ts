import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, RouterLink],
})
export class HomePage {
  public plugins = [
    {
      name: 'Barcode Scanning',
      url: '/barcode-scanning',
    },
    {
      name: 'Document Scanner',
      url: '/document-scanner',
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
      name: 'Selfie Segmentation',
      url: '/selfie-segmentation',
    },
    {
      name: 'Subject Segmentation',
      url: '/subject-segmentation',
    },
    {
      name: 'Translation',
      url: '/translation',
    },
  ];

  constructor() {}
}
