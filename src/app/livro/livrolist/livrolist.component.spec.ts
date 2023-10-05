import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrolistComponent } from './livrolist.component';

describe('LivrolistComponent', () => {
  let component: LivrolistComponent;
  let fixture: ComponentFixture<LivrolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrolistComponent]
    });
    fixture = TestBed.createComponent(LivrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
