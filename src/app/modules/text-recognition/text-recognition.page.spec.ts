import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { TextRecognitionPage } from './text-recognition.page';

describe('TextRecognitionPage', () => {
  let component: TextRecognitionPage;
  let fixture: ComponentFixture<TextRecognitionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, TextRecognitionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TextRecognitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
