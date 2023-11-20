import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBumpComponent } from './story-bump.component';

describe('StoryBumpComponent', () => {
  let component: StoryBumpComponent;
  let fixture: ComponentFixture<StoryBumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBumpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryBumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
