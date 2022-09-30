import { Injectable } from '@angular/core';
import { Adapter } from '../../models/adapter';
import { Course } from '../../models/courses';

@Injectable({
  providedIn: 'root'
})
export class AdapterService implements Adapter<Course> {
  adapt(item: any): Course {
    return new Course(item.name, item.day)
  }

}
