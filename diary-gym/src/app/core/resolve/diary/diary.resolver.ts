import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ExerciseSetsService } from '../../../features/services/exercise-sets.service';
import { ExerciseSetListAPI } from '../../../features/interfaces/exercise-set';

export const diaryResolver: ResolveFn<ExerciseSetListAPI> = (route, state) => {
  const exerciseSetsService = inject(ExerciseSetsService);
  return exerciseSetsService.getInitialList();
};
