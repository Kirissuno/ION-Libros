import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibroNuevoPage } from './libro-nuevo.page';

describe('LibroNuevoPage', () => {
  let component: LibroNuevoPage;
  let fixture: ComponentFixture<LibroNuevoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroNuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibroNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
