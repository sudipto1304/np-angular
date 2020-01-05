import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagrampostComponent } from './instagrampost.component';

describe('InstagrampostComponent', () => {
  let component: InstagrampostComponent;
  let fixture: ComponentFixture<InstagrampostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagrampostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagrampostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
