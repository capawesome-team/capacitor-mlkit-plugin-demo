import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { LanguageIdentificationPage } from './language-identification.page';

describe('LanguageIdentificationPage', () => {
  let component: LanguageIdentificationPage;
  let fixture: ComponentFixture<LanguageIdentificationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, LanguageIdentificationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageIdentificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
