import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
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
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import {
  DigitalInkRecognition,
  RecognitionCandidate,
  Stroke,
  StrokePoint,
} from '@capacitor-mlkit/digital-ink-recognition';

const STROKE_WIDTH = 3;
const STROKE_COLOR = '#000000';

@Component({
  selector: 'app-digital-ink-recognition',
  templateUrl: './digital-ink-recognition.page.html',
  styleUrls: ['./digital-ink-recognition.page.scss'],
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
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
  ],
})
export class DigitalInkRecognitionPage implements OnInit, AfterViewInit {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @ViewChild('canvas')
  public canvasElement: ElementRef<HTMLCanvasElement> | undefined;

  public formGroup = new UntypedFormGroup({
    languageTag: new UntypedFormControl('en-US'),
    maxResultCount: new UntypedFormControl(5),
    preContext: new UntypedFormControl(''),
  });
  public downloadedLanguageTags: string[] = [];
  public disableModelButtons = false;
  public candidates: RecognitionCandidate[] = [];

  private strokes: Stroke[] = [];
  private currentPoints: StrokePoint[] | undefined;
  private canvasContext: CanvasRenderingContext2D | undefined;

  private readonly githubUrl =
    'https://github.com/capawesome-team/capacitor-mlkit';

  public ngOnInit(): void {
    this.getDownloadedModels();
  }

  public ngAfterViewInit(): void {
    this.initializeCanvas();
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public startStroke(event: PointerEvent): void {
    this.currentPoints = [this.createStrokePoint(event)];
  }

  public continueStroke(event: PointerEvent): void {
    if (!this.currentPoints) {
      return;
    }
    const previousPoint = this.currentPoints[this.currentPoints.length - 1];
    const point = this.createStrokePoint(event);
    this.currentPoints.push(point);
    this.drawLine(previousPoint, point);
  }

  public endStroke(event: PointerEvent): void {
    if (!this.currentPoints) {
      return;
    }
    this.continueStroke(event);
    this.strokes.push({ points: this.currentPoints });
    this.currentPoints = undefined;
  }

  public clearCanvas(): void {
    this.strokes = [];
    this.currentPoints = undefined;
    this.candidates = [];
    const canvas = this.canvasElement?.nativeElement;
    if (canvas) {
      this.canvasContext?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  public async recognize(): Promise<void> {
    const canvas = this.canvasElement?.nativeElement;
    const languageTag = this.formGroup.get('languageTag')?.value;
    if (!canvas || !languageTag || this.strokes.length === 0) {
      return;
    }

    const maxResultCount = this.formGroup.get('maxResultCount')?.value;
    const preContext = this.formGroup.get('preContext')?.value;

    const { candidates } = await DigitalInkRecognition.recognize({
      languageTag,
      strokes: this.strokes,
      maxResultCount: maxResultCount,
      preContext: preContext,
      writingArea: {
        width: canvas.width,
        height: canvas.height,
      },
    });
    this.candidates = candidates;
    this.changeDetectorRef.markForCheck();
  }

  public downloadModel(): Promise<void> {
    return this.runModelOperation((languageTag) =>
      DigitalInkRecognition.downloadModel({ languageTag }),
    );
  }

  public deleteDownloadedModel(): Promise<void> {
    return this.runModelOperation((languageTag) =>
      DigitalInkRecognition.deleteDownloadedModel({ languageTag }),
    );
  }

  public async getDownloadedModels(): Promise<void> {
    const { languageTags } = await DigitalInkRecognition.getDownloadedModels();
    this.downloadedLanguageTags = languageTags;
    this.changeDetectorRef.markForCheck();
  }

  private async runModelOperation(
    operation: (languageTag: string) => Promise<void>,
  ): Promise<void> {
    const languageTag = this.formGroup.get('languageTag')?.value;
    if (!languageTag) {
      return;
    }
    this.disableModelButtons = true;
    try {
      await operation(languageTag);
      await this.getDownloadedModels();
    } finally {
      this.disableModelButtons = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  private initializeCanvas(): void {
    const context = this.canvasElement?.nativeElement.getContext('2d');
    if (!context) {
      return;
    }
    context.lineWidth = STROKE_WIDTH;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = STROKE_COLOR;
    this.canvasContext = context;
  }

  private createStrokePoint(event: PointerEvent): StrokePoint {
    return { x: event.offsetX, y: event.offsetY, t: Date.now() };
  }

  private drawLine(from: StrokePoint, to: StrokePoint): void {
    if (!this.canvasContext) {
      return;
    }
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(from.x, from.y);
    this.canvasContext.lineTo(to.x, to.y);
    this.canvasContext.stroke();
  }
}
