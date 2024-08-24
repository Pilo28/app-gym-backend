import { Component, inject, OnInit } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../../../interfaces/exercise-set';
import { ExerciseSetsService } from '../../../services/exercise-sets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  exerciseList!: ExerciseSetList;

  ngOnInit(): void {
    this.exerciseSetsService
    this.route.data.subscribe(({ diaryApi }) => {
      this.exerciseList = diaryApi.items;
    });
  }
  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe((dataApi) => (this.exerciseList = dataApi.items));
  }

  addExercise(newSet: ExerciseSet) {
    this.router.navigate(['/home/diary/new-template']);
  }

  addExerciseFormREactive(newSet: ExerciseSet) {
    this.router.navigate(['/home/diary/entry']);
  }

  deleteItem(id: string) {
    this.exerciseSetsService.deleteItem(id).subscribe();
  }

  editEntry(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.router.navigate([`/home/diary/entry/${id}`]);
  }

  newRep(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.exerciseSetsService
      .updateItem(id, updateSet)
      .subscribe();
  }
}
