import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInBosComponent } from './log-in-bos.component';

describe('LogInBosComponent', () => {
  let component: LogInBosComponent;
  let fixture: ComponentFixture<LogInBosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInBosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInBosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
