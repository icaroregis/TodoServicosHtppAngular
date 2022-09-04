import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerAddComponent } from './burguer-add.component';

describe('BurguerAddComponent', () => {
  let component: BurguerAddComponent;
  let fixture: ComponentFixture<BurguerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurguerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
