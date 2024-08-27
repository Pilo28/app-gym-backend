import { inject, Injectable } from '@angular/core';
import { ExerciseSet, ExerciseSetList, ExerciseSetListAPI } from '../interfaces/exercise-set';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExerciseSetsService {

  private httpClient = inject(HttpClient);
  private url = 'diary';

  getInitialList(): Observable<ExerciseSetList> {
    const headers = new HttpHeaders().set('X-TELEMETRY', 'true');
    return this.httpClient
    .get<ExerciseSetListAPI>(this.url, { headers })
    .pipe(map((api) => api?.items))
  }
  refreshList(): Observable<ExerciseSetList> {
    return this.httpClient
    .get<ExerciseSetListAPI>(this.url)
    .pipe(map((api) => api?.items))
  }

  addNewItem(item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url, item);
  }

  updateItem(id: string, item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }

  getItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.get<ExerciseSet>(`${this.url}/${id}`);
  }

  deleteItem(id: string): Observable<boolean> {
    const headers = new HttpHeaders().set('X-LOADING', 'false');
    return this.httpClient.delete<boolean>(`${this.url}/${id}`,  { headers });
  }


}
