import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerWidgetComponent } from './follower-widget.component';

describe('FollowerWidgetComponent', () => {
  let component: FollowerWidgetComponent;
  let fixture: ComponentFixture<FollowerWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
