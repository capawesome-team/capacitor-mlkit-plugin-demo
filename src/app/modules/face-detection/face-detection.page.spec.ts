import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FaceDetectionPage } from './face-detection.page';

describe('FaceDetectionPage', () => {
  let component: FaceDetectionPage;
  let fixture: ComponentFixture<FaceDetectionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, FaceDetectionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FaceDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
