import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { EntityExtractionPage } from './entity-extraction.page';

describe('EntityExtractionPage', () => {
  let component: EntityExtractionPage;
  let fixture: ComponentFixture<EntityExtractionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, EntityExtractionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityExtractionPage);
    component = fixture.componentInstance;
    // `ngOnInit` reads the downloaded models, which has no web implementation.
    spyOn(component, 'getDownloadedModels').and.resolveTo();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
