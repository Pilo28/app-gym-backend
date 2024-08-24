import { ResolveFn } from '@angular/router';
import { ExerciseSet } from '../../../features/interfaces/exercise-set';
import { inject } from '@angular/core';
import { ExerciseSetsService } from '../../../features/services/exercise-sets.service';

export const entryResolver: ResolveFn<ExerciseSet> = (route, state) => {
  const entryId = route.paramMap.get('id')!;
  const exerciseSetsService = inject(ExerciseSetsService);
  return exerciseSetsService.getItem(entryId);
};
