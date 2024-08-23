import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseSetsService } from '../../services/exercise-sets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry-form-reactive',
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrl: './new-entry-form-reactive.component.css'
})
export class NewEntryFormReactiveComponent {
  public entryForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      date: ['', Validators.required],
      exercise: ['', Validators.required],
      sets: ['', [Validators.required, Validators.min(0)]],
      reps: ['', [Validators.required, Validators.min(0)]],
    });
  }

  newEntry() {
    if (this.entryForm.valid) {
      const newEntry = { ...this.entryForm.value };
      this.exerciseSetsService
        .addNewItem(newEntry)
        .subscribe((entry) => this.router.navigate(['/home']));
    }
  }
}
