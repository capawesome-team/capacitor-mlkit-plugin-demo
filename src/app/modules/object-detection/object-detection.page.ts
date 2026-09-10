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
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import {
  DetectedObject,
  ObjectDetection,
  Rect,
} from '@capacitor-mlkit/object-detection';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.page.html',
  styleUrls: ['./object-detection.page.scss'],
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCheckbox,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
  ],
})
export class ObjectDetectionPage {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public formGroup = new UntypedFormGroup({
    shouldEnableClassification: new UntypedFormControl(true),
    shouldEnableMultipleObjects: new UntypedFormControl(true),
  });
  public detectedObjects: DetectedObject[] = [];

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

    const shouldEnableClassification = this.formGroup.get(
      'shouldEnableClassification',
    )?.value;
    const shouldEnableMultipleObjects = this.formGroup.get(
      'shouldEnableMultipleObjects',
    )?.value;

    const { detectedObjects } = await ObjectDetection.processImage({
      path,
      shouldEnableClassification: shouldEnableClassification,
      shouldEnableMultipleObjects: shouldEnableMultipleObjects,
    });
    this.detectedObjects = detectedObjects;
    this.changeDetectorRef.markForCheck();
  }

  public formatRect(rect: Rect): string {
    return `(${rect.left}, ${rect.top}, ${rect.right}, ${rect.bottom})`;
  }
}
