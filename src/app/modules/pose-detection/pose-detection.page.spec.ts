import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { PoseDetectionPage } from './pose-detection.page';

describe('PoseDetectionPage', () => {
  let component: PoseDetectionPage;
  let fixture: ComponentFixture<PoseDetectionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, PoseDetectionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PoseDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
