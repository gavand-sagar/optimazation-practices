import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCombineAndForkComponent } from './observable-combine-and-fork.component';

describe('ObservableCombineAndForkComponent', () => {
  let component: ObservableCombineAndForkComponent;
  let fixture: ComponentFixture<ObservableCombineAndForkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableCombineAndForkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableCombineAndForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
