import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel6Component } from './panel6.component';

describe('Panel6Component', () => {
  let component: Panel6Component;
  let fixture: ComponentFixture<Panel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
