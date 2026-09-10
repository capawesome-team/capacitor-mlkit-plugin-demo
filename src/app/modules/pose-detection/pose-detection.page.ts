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
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import {
  PerformanceMode,
  Pose,
  PoseDetection,
  PoseLandmark,
} from '@capacitor-mlkit/pose-detection';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-pose-detection',
  templateUrl: './pose-detection.page.html',
  styleUrls: ['./pose-detection.page.scss'],
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
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
  ],
})
export class PoseDetectionPage {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public readonly performanceMode = PerformanceMode;

  public formGroup = new UntypedFormGroup({
    performanceMode: new UntypedFormControl(PerformanceMode.Base),
  });
  public poses: Pose[] = [];

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async processImage(): Promise<void> {
    const { files } = await FilePicker.pickImages({ limit: 1 });
    const path = files[0]?.path;
    if (!path) {
      return;
    }

    const performanceMode = this.formGroup.get('performanceMode')?.value;

    const { poses } = await PoseDetection.processImage({
      path,
      performanceMode: performanceMode,
    });
    this.poses = poses;
    this.changeDetectorRef.markForCheck();
  }

  public formatLandmark(landmark: PoseLandmark): string {
    return `(${landmark.x}, ${landmark.y}, ${landmark.z}), ${landmark.inFrameLikelihood}`;
  }
}
