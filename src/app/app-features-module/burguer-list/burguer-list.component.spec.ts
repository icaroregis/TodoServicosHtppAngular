import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerListComponent } from './burguer-list.component';

describe('BurguerListComponent', () => {
  let component: BurguerListComponent;
  let fixture: ComponentFixture<BurguerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
