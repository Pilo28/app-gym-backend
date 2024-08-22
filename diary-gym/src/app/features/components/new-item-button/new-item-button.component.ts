import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseSet } from '../../interfaces/exercise-set';

@Component({
  selector: 'app-new-item-button',
  templateUrl: './new-item-button.component.html',
  styleUrl: './new-item-button.component.css'
})
export class NewItemButtonComponent {
  @Output() newExerciseEvent = new EventEmitter<ExerciseSet>();

  addNewExercise() {
    const id = Date.now().toString();
    const date = new Date();
    const reps = 20;
    const sets = 3;
    const exercise = 'Leg Press';
    const newExerciseSet: ExerciseSet = { id, date, reps, sets, exercise };
    this.newExerciseEvent.emit(newExerciseSet);
  }
}
