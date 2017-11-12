import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildfishComponent } from './wildfish.component';

describe('WildfishComponent', () => {
  let component: WildfishComponent;
  let fixture: ComponentFixture<WildfishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildfishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildfishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
