import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientFormPage } from './client-form.page';

describe('ClientFormPage', () => {
  let component: ClientFormPage;
  let fixture: ComponentFixture<ClientFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
