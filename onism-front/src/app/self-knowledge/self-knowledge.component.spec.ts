import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfKnowledgeComponent } from './self-knowledge.component';

describe('SelfKnowledgeComponent', () => {
  let component: SelfKnowledgeComponent;
  let fixture: ComponentFixture<SelfKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
