import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAlterarComponent } from './cadastrar-alterar.component';

describe('CadastrarAlterarComponent', () => {
  let component: CadastrarAlterarComponent;
  let fixture: ComponentFixture<CadastrarAlterarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarAlterarComponent]
    });
    fixture = TestBed.createComponent(CadastrarAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
