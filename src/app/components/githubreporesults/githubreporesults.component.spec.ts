import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubreporesultsComponent } from './githubreporesults.component';

describe('GithubreporesultsComponent', () => {
  let component: GithubreporesultsComponent;
  let fixture: ComponentFixture<GithubreporesultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubreporesultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubreporesultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
