import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel7Component } from './panel7.component';

describe('Panel7Component', () => {
  let component: Panel7Component;
  let fixture: ComponentFixture<Panel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
