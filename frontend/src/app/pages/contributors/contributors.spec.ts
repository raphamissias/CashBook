import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contributors } from './contributors';

describe('Contributors', () => {
  let component: Contributors;
  let fixture: ComponentFixture<Contributors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contributors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contributors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
