import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfplComponent } from './infpl.component';

describe('InfplComponent', () => {
  let component: InfplComponent;
  let fixture: ComponentFixture<InfplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
