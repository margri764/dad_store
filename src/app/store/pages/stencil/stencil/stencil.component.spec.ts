import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilComponent } from './stencil.component';

describe('StencilComponent', () => {
  let component: StencilComponent;
  let fixture: ComponentFixture<StencilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StencilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
