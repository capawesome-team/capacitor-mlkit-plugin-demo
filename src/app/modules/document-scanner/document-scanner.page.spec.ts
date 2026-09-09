import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular';

import { DocumentScannerPage } from './document-scanner.page';

describe('DocumentScannerPage', () => {
  let component: DocumentScannerPage;
  let fixture: ComponentFixture<DocumentScannerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DocumentScannerPage],
      providers: [provideIonicAngular()],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
