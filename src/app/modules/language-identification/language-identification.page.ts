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
import {
  IdentifiedLanguage,
  LanguageIdentification,
} from '@capacitor-mlkit/language-identification';

@Component({
  selector: 'app-language-identification',
  templateUrl: './language-identification.page.html',
  styleUrls: ['./language-identification.page.scss'],
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
export class LanguageIdentificationPage {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public formGroup = new UntypedFormGroup({
    text: new UntypedFormControl('Wie geht es dir?'),
    confidenceThreshold: new UntypedFormControl(5),
  });
  public language: string | undefined;
  public identifiedLanguages: IdentifiedLanguage[] = [];

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public pinFormatter(value: number): string {
    return `${value / 10.0}`;
  }

  public async identifyLanguage(): Promise<void> {
    const text = this.formGroup.get('text')?.value;
    if (!text) {
      return;
    }

    const confidenceThreshold = this.formGroup.get(
      'confidenceThreshold',
    )?.value;

    const { language } = await LanguageIdentification.identifyLanguage({
      text,
      confidenceThreshold: confidenceThreshold / 10.0,
    });
    this.language = language;
    this.changeDetectorRef.markForCheck();
  }

  public async identifyPossibleLanguages(): Promise<void> {
    const text = this.formGroup.get('text')?.value;
    if (!text) {
      return;
    }

    const confidenceThreshold = this.formGroup.get(
      'confidenceThreshold',
    )?.value;

    const { identifiedLanguages } =
      await LanguageIdentification.identifyPossibleLanguages({
        text,
        confidenceThreshold: confidenceThreshold / 10.0,
      });
    this.identifiedLanguages = identifiedLanguages;
    this.changeDetectorRef.markForCheck();
  }
}
