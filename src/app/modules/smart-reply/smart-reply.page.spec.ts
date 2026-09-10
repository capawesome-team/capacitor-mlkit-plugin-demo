import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { SmartReplyPage } from './smart-reply.page';

describe('SmartReplyPage', () => {
  let component: SmartReplyPage;
  let fixture: ComponentFixture<SmartReplyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule, SmartReplyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartReplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
