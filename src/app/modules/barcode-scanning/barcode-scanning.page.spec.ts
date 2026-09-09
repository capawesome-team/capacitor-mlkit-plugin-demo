import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular';

import { BarcodeScanningPage } from './barcode-scanning.page';

describe('BarcodeScanningPage', () => {
  let component: BarcodeScanningPage;
  let fixture: ComponentFixture<BarcodeScanningPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BarcodeScanningPage],
      providers: [provideIonicAngular()],
    }).compileComponents();

    fixture = TestBed.createComponent(BarcodeScanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
