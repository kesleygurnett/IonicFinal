import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chapter19Page } from './chapter19.page';

describe('Chapter19Page', () => {
  let component: Chapter19Page;
  let fixture: ComponentFixture<Chapter19Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Chapter19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
