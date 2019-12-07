import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibroDetallesPage } from './libro-detalles.page';

describe('LibroDetallesPage', () => {
  let component: LibroDetallesPage;
  let fixture: ComponentFixture<LibroDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibroDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
