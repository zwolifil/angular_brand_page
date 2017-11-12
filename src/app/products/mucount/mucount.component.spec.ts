import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MucountComponent } from './mucount.component';

describe('MucountComponent', () => {
  let component: MucountComponent;
  let fixture: ComponentFixture<MucountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MucountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MucountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
