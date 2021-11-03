import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadpicComponent } from './loadpic.component';

describe('LoadpicComponent', () => {
  let component: LoadpicComponent;
  let fixture: ComponentFixture<LoadpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
