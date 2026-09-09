import { KeyValuePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
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
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { Language, Translation } from '@capacitor-mlkit/translation';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.page.html',
  styleUrls: ['./translation.page.scss'],
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
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    KeyValuePipe,
  ],
})
export class TranslationPage implements OnInit {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public readonly language = Language;
  public translateFormGroup = new UntypedFormGroup({
    text: new UntypedFormControl(''),
    sourceLanguage: new UntypedFormControl(Language.English),
    targetLanguage: new UntypedFormControl(Language.German),
    translatedText: new UntypedFormControl(''),
  });
  public manageModelsFormGroup = new UntypedFormGroup({
    languages: new UntypedFormControl([]),
  });
  public disableSaveModelsButton = false;

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  constructor() {}

  public ngOnInit(): void {
    this.getDownloadedModels();
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async saveModels(): Promise<void> {
    this.disableSaveModelsButton = true;
    const languages: Language[] =
      this.manageModelsFormGroup.get('languages')?.value;
    if (!languages) {
      return;
    }
    for (const availableLanguage of Object.values(Language)) {
      if (languages.includes(availableLanguage)) {
        await Translation.downloadModel({ language: availableLanguage });
      } else {
        await Translation.deleteDownloadedModel({
          language: availableLanguage,
        });
      }
    }
    this.disableSaveModelsButton = false;
    this.changeDetectorRef.markForCheck();
  }

  public async getDownloadedModels(): Promise<void> {
    const { languages } = await Translation.getDownloadedModels();
    this.manageModelsFormGroup.patchValue({ languages });
  }

  public async translate(): Promise<void> {
    const text = this.translateFormGroup.get('text')?.value;
    const sourceLanguage = this.translateFormGroup.get('sourceLanguage')?.value;
    const targetLanguage = this.translateFormGroup.get('targetLanguage')?.value;
    if (!text || !sourceLanguage || !targetLanguage) {
      return;
    }
    const result = await Translation.translate({
      text,
      sourceLanguage,
      targetLanguage,
    });
    this.translateFormGroup.patchValue({ translatedText: result.text });
  }
}
