import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTextfieldComponent } from './search-textfield.component';

describe('SearchTextfieldComponent', () => {
  let component: SearchTextfieldComponent;
  let fixture: ComponentFixture<SearchTextfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTextfieldComponent]
    });
    fixture = TestBed.createComponent(SearchTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
