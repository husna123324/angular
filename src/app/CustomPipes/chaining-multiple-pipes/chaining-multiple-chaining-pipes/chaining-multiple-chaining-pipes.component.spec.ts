import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingMultipleChainingPipesComponent } from './chaining-multiple-chaining-pipes.component';

describe('ChainingMultipleChainingPipesComponent', () => {
  let component: ChainingMultipleChainingPipesComponent;
  let fixture: ComponentFixture<ChainingMultipleChainingPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainingMultipleChainingPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainingMultipleChainingPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
