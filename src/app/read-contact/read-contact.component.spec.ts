import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadContactComponent } from './read-contact.component';

describe('ReadContactComponent', () => {
  let component: ReadContactComponent;
  let fixture: ComponentFixture<ReadContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
