import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputTableComponent } from './user-input-table.component';

describe('UserInputTableComponent', () => {
  let component: UserInputTableComponent;
  let fixture: ComponentFixture<UserInputTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
