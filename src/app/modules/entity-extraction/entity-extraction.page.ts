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
import {
  Entity,
  EntityAnnotation,
  EntityExtraction,
  EntityType,
  Language,
} from '@capacitor-mlkit/entity-extraction';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.page.html',
  styleUrls: ['./entity-extraction.page.scss'],
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
export class EntityExtractionPage implements OnInit {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public readonly language = Language;
  public readonly entityType = EntityType;

  public extractFormGroup = new UntypedFormGroup({
    text: new UntypedFormControl("Let's meet tomorrow at 5pm."),
    language: new UntypedFormControl(Language.English),
    referenceTime: new UntypedFormControl(Date.now()),
    referenceTimeZone: new UntypedFormControl(
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    ),
    entityTypes: new UntypedFormControl([]),
  });
  public manageModelsFormGroup = new UntypedFormGroup({
    languages: new UntypedFormControl([]),
  });
  public disableSaveModelsButton = false;
  public annotations: EntityAnnotation[] = [];

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  public ngOnInit(): void {
    this.getDownloadedModels();
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async extractEntities(): Promise<void> {
    const text = this.extractFormGroup.get('text')?.value;
    const language = this.extractFormGroup.get('language')?.value;
    if (!text || !language) {
      return;
    }

    const referenceTime = this.extractFormGroup.get('referenceTime')?.value;
    const referenceTimeZone =
      this.extractFormGroup.get('referenceTimeZone')?.value;
    const entityTypes: EntityType[] =
      this.extractFormGroup.get('entityTypes')?.value;

    const { annotations } = await EntityExtraction.extractEntities({
      text,
      language,
      referenceTime: referenceTime,
      referenceTimeZone: referenceTimeZone,
      entityTypes: entityTypes.length > 0 ? entityTypes : undefined,
    });
    this.annotations = annotations;
    this.changeDetectorRef.markForCheck();
  }

  public async saveModels(): Promise<void> {
    const languages: Language[] =
      this.manageModelsFormGroup.get('languages')?.value;
    if (!languages) {
      return;
    }
    this.disableSaveModelsButton = true;
    try {
      for (const availableLanguage of Object.values(Language)) {
        if (languages.includes(availableLanguage)) {
          await EntityExtraction.downloadModel({ language: availableLanguage });
        } else {
          await EntityExtraction.deleteDownloadedModel({
            language: availableLanguage,
          });
        }
      }
    } finally {
      this.disableSaveModelsButton = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  public async getDownloadedModels(): Promise<void> {
    const { languages } = await EntityExtraction.getDownloadedModels();
    this.manageModelsFormGroup.patchValue({ languages });
  }

  public getEntityProperties(entity: Entity): { key: string; value: string }[] {
    return Object.entries(entity).map(([key, value]) => ({
      key,
      value: `${value}`,
    }));
  }
}
