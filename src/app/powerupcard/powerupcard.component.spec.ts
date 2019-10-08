import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerupcardComponent } from './powerupcard.component';

describe('PowerupcardComponent', () => {
  let component: PowerupcardComponent;
  let fixture: ComponentFixture<PowerupcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerupcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerupcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
