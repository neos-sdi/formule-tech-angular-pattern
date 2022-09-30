import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Course, courses, courses2 } from '../../models/courses';
import { AdapterService } from './adapter.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private adapter: AdapterService) { }

  getAll(): Observable<Course[]>{
    return of(courses2).pipe(
      map(c=> c.map(cours=> {
        return this.adapter.adapt(cours)
      }))
    )
  }
}
