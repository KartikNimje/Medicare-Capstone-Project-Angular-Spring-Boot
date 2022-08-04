import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicinesComponent } from './edit-medicines.component';

describe('EditMedicinesComponent', () => {
  let component: EditMedicinesComponent;
  let fixture: ComponentFixture<EditMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
