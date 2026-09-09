import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import {
  FaceMesh,
  FaceMeshDetection,
  Point3D,
  UseCase,
} from '@capacitor-mlkit/face-mesh-detection';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import {
  ContourDescriptionPipe,
  ContourPipe,
  ContourTitlePipe,
  KeysPipe,
} from './face-mesh-detection.pipe';

@Component({
  selector: 'app-face-mesh-detection',
  templateUrl: './face-mesh-detection.page.html',
  styleUrls: ['./face-mesh-detection.page.scss'],
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    KeysPipe,
    ContourTitlePipe,
    ContourDescriptionPipe,
    ContourPipe,
  ],
})
export class FaceMeshDetectionPage {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public readonly useCase = UseCase;

  public formGroup = new UntypedFormGroup({
    useCase: new UntypedFormControl(UseCase.FaceMesh),
  });

  public faceMeshs: FaceMesh[] = [];

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async processImage(): Promise<void> {
    const { files } = await FilePicker.pickImages({ limit: 1 });
    const path = files[0]?.path;
    if (!path) {
      return;
    }

    const useCase = this.formGroup.get('useCase')?.value;

    const { faceMeshs } = await FaceMeshDetection.processImage({
      path,

      useCase: useCase,
    });
    this.faceMeshs = faceMeshs;
    this.changeDetectorRef.markForCheck();
  }

  public getPoint(point: Point3D) {
    return `(${point.x}, ${point.y}, ${point.z})`;
  }

  public getPoints(points: Point3D[]) {
    const results = [];
    for (const point of points) {
      results.push(this.getPoint(point));
    }
    return results.join(', ');
  }
}
