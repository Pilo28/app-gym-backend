import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryFormTemplateComponent } from './new-entry-form-template.component';

describe('NewEntryFormTemplateComponent', () => {
  let component: NewEntryFormTemplateComponent;
  let fixture: ComponentFixture<NewEntryFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewEntryFormTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEntryFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
