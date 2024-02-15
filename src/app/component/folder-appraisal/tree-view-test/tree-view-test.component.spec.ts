import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewTestComponent } from './tree-view-test.component';

describe('TreeViewTestComponent', () => {
  let component: TreeViewTestComponent;
  let fixture: ComponentFixture<TreeViewTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeViewTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeViewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
