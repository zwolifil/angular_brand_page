import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeniteComponent } from './venite.component';

describe('VeniteComponent', () => {
  let component: VeniteComponent;
  let fixture: ComponentFixture<VeniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
