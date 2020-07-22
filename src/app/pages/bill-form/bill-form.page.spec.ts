import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillFormPage } from './bill-form.page';

describe('BillFormPage', () => {
  let component: BillFormPage;
  let fixture: ComponentFixture<BillFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
