import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryItemComponent } from './entry-item.component';
import { ExerciseSet } from '../../interfaces/exercise-set';

describe('EntryItemComponent', () => {
  let component: EntryItemComponent;
  let fixture: ComponentFixture<EntryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryItemComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryItemComponent);
    component = fixture.componentInstance;

    component.exerciseSet = {
      id: '1',
      date: new Date(),
      exercise: 'Push Ups',
      reps: 20,
      sets: 4
    } as ExerciseSet;

    spyOn(component.newRepEvent, 'emit');
    spyOn(component.editEvent, 'emit');
    spyOn(component.deleteEvent, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit deleteEvent when delete() is called', () => {
    component.delete();
    expect(component.deleteEvent.emit).toHaveBeenCalledWith('1');
  });

  it('should emit editEvent when editEntry() is called', () => {
    component.editEntry();
    expect(component.editEvent.emit).toHaveBeenCalledWith(component.exerciseSet);
  });

  it('should emit newRepEvent with updated reps when newRep() is called', () => {
    component.newRep();
    expect(component.newRepEvent.emit).toHaveBeenCalledWith({
      ...component.exerciseSet,
      reps: 21
    });
  });
});
