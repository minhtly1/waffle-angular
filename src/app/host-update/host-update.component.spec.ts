import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostUpdateComponent } from './host-update.component';

describe('HostUpdateComponent', () => {
  let component: HostUpdateComponent;
  let fixture: ComponentFixture<HostUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
