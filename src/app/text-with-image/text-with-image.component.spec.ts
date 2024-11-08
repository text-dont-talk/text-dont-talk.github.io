import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithImageComponent } from './text-with-image.component';

describe('TextWithImageComponent', () => {
  let component: TextWithImageComponent;
  let fixture: ComponentFixture<TextWithImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextWithImageComponent]
    });
    fixture = TestBed.createComponent(TextWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
