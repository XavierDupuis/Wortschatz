import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCountSelectorComponent } from './word-count-selector.component';

describe('WordCountSelectorComponent', () => {
  let component: WordCountSelectorComponent;
  let fixture: ComponentFixture<WordCountSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCountSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCountSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
