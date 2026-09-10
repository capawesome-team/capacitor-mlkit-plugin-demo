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
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRange,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { ImageLabel, ImageLabeling } from '@capacitor-mlkit/image-labeling';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-image-labeling',
  templateUrl: './image-labeling.page.html',
  styleUrls: ['./image-labeling.page.scss'],
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonRange,
    IonRow,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
  ],
})
export class ImageLabelingPage {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public formGroup = new UntypedFormGroup({
    confidenceThreshold: new UntypedFormControl(5),
  });
  public labels: ImageLabel[] = [];

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public pinFormatter(value: number): string {
    return `${value / 10.0}`;
  }

  public async processImage(): Promise<void> {
    const { files } = await FilePicker.pickImages({ limit: 1 });
    const path = files[0]?.path;
    if (!path) {
      return;
    }

    const confidenceThreshold = this.formGroup.get(
      'confidenceThreshold',
    )?.value;

    const { labels } = await ImageLabeling.processImage({
      path,
      confidenceThreshold: confidenceThreshold / 10.0,
    });
    this.labels = labels;
    this.changeDetectorRef.markForCheck();
  }
}
