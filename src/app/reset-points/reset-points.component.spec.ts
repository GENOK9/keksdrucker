import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPointsComponent } from './reset-points.component';

describe('ResetPointsComponent', () => {
  let component: ResetPointsComponent;
  let fixture: ComponentFixture<ResetPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
