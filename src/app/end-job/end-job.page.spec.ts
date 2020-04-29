import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndJobPage } from './end-job.page';

describe('EndJobPage', () => {
  let component: EndJobPage;
  let fixture: ComponentFixture<EndJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndJobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
