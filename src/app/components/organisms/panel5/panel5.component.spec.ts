import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel5Component } from './panel5.component';

describe('Panel5Component', () => {
  let component: Panel5Component;
  let fixture: ComponentFixture<Panel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
