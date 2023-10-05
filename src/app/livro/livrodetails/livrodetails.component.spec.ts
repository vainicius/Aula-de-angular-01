import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrodetailsComponent } from './livrodetails.component';

describe('LivrodetailsComponent', () => {
  let component: LivrodetailsComponent;
  let fixture: ComponentFixture<LivrodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrodetailsComponent]
    });
    fixture = TestBed.createComponent(LivrodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
