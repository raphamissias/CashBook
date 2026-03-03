import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridView } from './data-grid-view';

describe('DataGridView', () => {
  let component: DataGridView;
  let fixture: ComponentFixture<DataGridView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGridView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGridView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
