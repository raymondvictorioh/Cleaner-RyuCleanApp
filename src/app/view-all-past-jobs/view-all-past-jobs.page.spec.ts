import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAllPastJobsPage } from './view-all-past-jobs.page';

describe('ViewAllPastJobsPage', () => {
  let component: ViewAllPastJobsPage;
  let fixture: ComponentFixture<ViewAllPastJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPastJobsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllPastJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
