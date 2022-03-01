import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemPreviewComponent } from './poem-preview.component';

describe('PoemPreviewComponent', () => {
  let component: PoemPreviewComponent;
  let fixture: ComponentFixture<PoemPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
