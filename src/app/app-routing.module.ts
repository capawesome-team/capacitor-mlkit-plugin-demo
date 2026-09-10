import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'barcode-scanning',
    loadChildren: () =>
      import('./modules/barcode-scanning/barcode-scanning.module').then(
        (m) => m.BarcodeScanningModule,
      ),
  },
  {
    path: 'digital-ink-recognition',
    loadChildren: () =>
      import('./modules/digital-ink-recognition/digital-ink-recognition.module').then(
        (m) => m.DigitalInkRecognitionModule,
      ),
  },
  {
    path: 'document-scanner',
    loadChildren: () =>
      import('./modules/document-scanner/document-scanner.module').then(
        (m) => m.DocumentScannerModule,
      ),
  },
  {
    path: 'entity-extraction',
    loadChildren: () =>
      import('./modules/entity-extraction/entity-extraction.module').then(
        (m) => m.EntityExtractionModule,
      ),
  },
  {
    path: 'face-detection',
    loadChildren: () =>
      import('./modules/face-detection/face-detection.module').then(
        (m) => m.FaceDetectionModule,
      ),
  },
  {
    path: 'face-mesh-detection',
    loadChildren: () =>
      import('./modules/face-mesh-detection/face-mesh-detection.module').then(
        (m) => m.FaceMeshDetectionModule,
      ),
  },
  {
    path: 'image-labeling',
    loadChildren: () =>
      import('./modules/image-labeling/image-labeling.module').then(
        (m) => m.ImageLabelingModule,
      ),
  },
  {
    path: 'language-identification',
    loadChildren: () =>
      import('./modules/language-identification/language-identification.module').then(
        (m) => m.LanguageIdentificationModule,
      ),
  },
  {
    path: 'object-detection',
    loadChildren: () =>
      import('./modules/object-detection/object-detection.module').then(
        (m) => m.ObjectDetectionModule,
      ),
  },
  {
    path: 'pose-detection',
    loadChildren: () =>
      import('./modules/pose-detection/pose-detection.module').then(
        (m) => m.PoseDetectionModule,
      ),
  },
  {
    path: 'selfie-segmentation',
    loadChildren: () =>
      import('./modules/selfie-segmentation/selfie-segmentation.module').then(
        (m) => m.SelfieSegmentationModule,
      ),
  },
  {
    path: 'smart-reply',
    loadChildren: () =>
      import('./modules/smart-reply/smart-reply.module').then(
        (m) => m.SmartReplyModule,
      ),
  },
  {
    path: 'subject-segmentation',
    loadChildren: () =>
      import('./modules/subject-segmentation/subject-segmentation.module').then(
        (m) => m.SubjectSegmentationModule,
      ),
  },
  {
    path: 'text-recognition',
    loadChildren: () =>
      import('./modules/text-recognition/text-recognition.module').then(
        (m) => m.TextRecognitionModule,
      ),
  },
  {
    path: 'translation',
    loadChildren: () =>
      import('./modules/translation/translation.module').then(
        (m) => m.TranslationModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
