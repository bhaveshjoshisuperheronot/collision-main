import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyButtonsComponent } from './sticky-buttons.component';

describe('StickyButtonsComponent', () => {
  let component: StickyButtonsComponent;
  let fixture: ComponentFixture<StickyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
