import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { DigitalInkRecognitionPage } from './digital-ink-recognition.page';

describe('DigitalInkRecognitionPage', () => {
  let component: DigitalInkRecognitionPage;
  let fixture: ComponentFixture<DigitalInkRecognitionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, DigitalInkRecognitionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalInkRecognitionPage);
    component = fixture.componentInstance;
    // `ngOnInit` reads the downloaded models, which has no web implementation.
    spyOn(component, 'getDownloadedModels').and.resolveTo();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
