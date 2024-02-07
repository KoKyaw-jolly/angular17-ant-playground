import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimbLiteTestComponent } from './cimb-lite-test.component';

describe('CimbLiteTestComponent', () => {
  let component: CimbLiteTestComponent;
  let fixture: ComponentFixture<CimbLiteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CimbLiteTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CimbLiteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
