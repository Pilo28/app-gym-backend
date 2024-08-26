import { Component, inject, Input, OnInit } from '@angular/core';
import {  FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ExerciseSetsService } from '../../services/exercise-sets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { multipleValidator } from '../../../shared/validators/custom-validation';
import { ExerciseSet } from '../../interfaces/exercise-set';
import { ExercisesService } from '../../services/exercises/exercises.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-new-entry-form-reactive',
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrl: './new-entry-form-reactive.component.css'
})
export class NewEntryFormReactiveComponent implements OnInit {
  @Input('id') entryId?: string;
  public minDate: string;

  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private exerciseService = inject(ExercisesService);
  public showSuggestions: boolean = false;


  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private readonly DEBOUNCE_TIME = 300;

  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['',[Validators.required,  this.dateValidator.bind(this)]],
    sets: [0, [Validators.required, Validators.min(2), multipleValidator(2)]],
    reps: [0, [Validators.required, Validators.min(3), multipleValidator(3)]],
  });

  public exercises$ = this.entryForm.get('exercise')?.valueChanges.pipe(
    debounceTime(this.DEBOUNCE_TIME),
    map((exercise) => exercise ?? ''),
    filter((exercise) => exercise.length >= 3),
    distinctUntilChanged(),
    switchMap((exercise) => this.exerciseService.getExercises(exercise))
  );

  constructor() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

  }
  ngOnInit(): void {
    if (this.entryId) {
      this.route.data.subscribe(({ entry }) => {
        this.updateForm(entry);
      });
    }
  }

  private dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    if (selectedDate < currentDate) {
      return { invalidDate: true };
    }
    return null;
  }


  updateForm(entry: ExerciseSet): void {
    let { id: _, ...entryForm } = entry;
    this.entryForm.setValue(entryForm);
  }

  newEntry() {
    if (this.entryForm.valid) {
      const newEntry = { ...this.entryForm.value };
      if (this.entryId) {
        this.exerciseSetsService
          .updateItem(this.entryId, newEntry)
          .subscribe((entry) => this.router.navigate(['/home']));
      } else {
        this.exerciseSetsService
          .addNewItem(newEntry)
          .subscribe((entry) => this.router.navigate(['/home']));
      }
    }
  }
  selectExercise(suggestion: string) {
    this.entryForm.get('exercise')?.setValue(suggestion);
    this.toggleSuggestions(false);
  }

  toggleSuggestions(turnOn: boolean) {
    this.showSuggestions = turnOn;
  }
}
