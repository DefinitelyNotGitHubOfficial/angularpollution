import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveForwardComponent } from './move-forward.component';

describe('MoveForwardComponent', () => {
  let component: MoveForwardComponent;
  let fixture: ComponentFixture<MoveForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveForwardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoveForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
