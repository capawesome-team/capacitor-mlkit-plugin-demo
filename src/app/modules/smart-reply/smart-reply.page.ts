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
  SmartReply,
  SmartReplySuggestionResultStatus,
  TextMessage,
} from '@capacitor-mlkit/smart-reply';

const SAMPLE_CONVERSATION: TextMessage[] = [
  {
    text: 'Are you free for lunch today?',
    timestamp: Date.now() - 120_000,
    isLocalUser: false,
    userId: 'user-1',
  },
  {
    text: 'Sure, where do you want to go?',
    timestamp: Date.now() - 60_000,
    isLocalUser: true,
  },
  {
    text: 'How about the new place downtown?',
    timestamp: Date.now(),
    isLocalUser: false,
    userId: 'user-1',
  },
];

@Component({
  selector: 'app-smart-reply',
  templateUrl: './smart-reply.page.html',
  styleUrls: ['./smart-reply.page.scss'],
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
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
export class SmartReplyPage {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public formGroup = new UntypedFormGroup({
    text: new UntypedFormControl(''),
    isLocalUser: new UntypedFormControl(false),
    userId: new UntypedFormControl('user-1'),
  });
  public messages: TextMessage[] = [...SAMPLE_CONVERSATION];
  public status: SmartReplySuggestionResultStatus | undefined;
  public suggestions: string[] = [];

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public addMessage(): void {
    const text = this.formGroup.get('text')?.value;
    if (!text) {
      return;
    }

    const isLocalUser = this.formGroup.get('isLocalUser')?.value;
    const userId = this.formGroup.get('userId')?.value;

    this.messages.push({
      text,
      timestamp: Date.now(),
      isLocalUser: isLocalUser,
      userId: isLocalUser ? undefined : userId,
    });
    this.formGroup.patchValue({ text: '' });
  }

  public clearMessages(): void {
    this.messages = [];
    this.status = undefined;
    this.suggestions = [];
  }

  public async suggestReplies(): Promise<void> {
    const { status, suggestions } = await SmartReply.suggestReplies({
      messages: this.messages,
    });
    this.status = status;
    this.suggestions = suggestions;
    this.changeDetectorRef.markForCheck();
  }
}
