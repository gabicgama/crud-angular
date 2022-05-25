import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'front-end' },
    { _id: '1', name: 'Angular', category: 'front-end' },
    { _id: '1', name: 'Angular', category: 'front-end' },
    { _id: '1', name: 'Angular', category: 'front-end' }
  ];
  public displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
