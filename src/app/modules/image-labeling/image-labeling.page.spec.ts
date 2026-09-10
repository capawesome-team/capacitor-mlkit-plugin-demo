import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { ImageLabelingPage } from './image-labeling.page';

describe('ImageLabelingPage', () => {
  let component: ImageLabelingPage;
  let fixture: ComponentFixture<ImageLabelingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, ImageLabelingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageLabelingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
