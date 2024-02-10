import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposDetailPageComponent } from './repos-detail-page.component';

describe('ReposDetailPageComponent', () => {
  let component: ReposDetailPageComponent;
  let fixture: ComponentFixture<ReposDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposDetailPageComponent]
    });
    fixture = TestBed.createComponent(ReposDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
