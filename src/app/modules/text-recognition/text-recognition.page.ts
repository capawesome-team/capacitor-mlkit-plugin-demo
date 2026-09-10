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
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import {
  ProcessImageResult,
  Rect,
  Script,
  TextRecognition,
} from '@capacitor-mlkit/text-recognition';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-text-recognition',
  templateUrl: './text-recognition.page.html',
  styleUrls: ['./text-recognition.page.scss'],
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
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
  ],
})
export class TextRecognitionPage {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public readonly script = Script;

  public formGroup = new UntypedFormGroup({
    script: new UntypedFormControl(Script.Latin),
  });
  public result: ProcessImageResult | undefined;

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

    const script = this.formGroup.get('script')?.value;

    const result = await TextRecognition.processImage({
      path,
      script: script,
    });
    this.result = result;
    this.changeDetectorRef.markForCheck();
  }

  public formatRect(rect: Rect): string {
    return `(${rect.left}, ${rect.top}, ${rect.right}, ${rect.bottom})`;
  }
}
