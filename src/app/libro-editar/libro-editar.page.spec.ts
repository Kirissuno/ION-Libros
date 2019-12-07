import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibroEditarPage } from './libro-editar.page';

describe('LibroEditarPage', () => {
  let component: LibroEditarPage;
  let fixture: ComponentFixture<LibroEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibroEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
