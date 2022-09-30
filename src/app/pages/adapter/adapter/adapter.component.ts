import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/courses';
import { CourseService } from '../../../services/adapter/course.service';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent implements OnInit {
  courses: Course[] = []
  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(c=>{
      this.courses = c
    })
  }

}
