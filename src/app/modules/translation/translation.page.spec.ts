import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { TranslationPage } from './translation.page';

describe('TranslationPage', () => {
  let component: TranslationPage;
  let fixture: ComponentFixture<TranslationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, TranslationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslationPage);
    component = fixture.componentInstance;
    // `ngOnInit` reads the downloaded models, which has no web implementation.
    spyOn(component, 'getDownloadedModels').and.resolveTo();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
