import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = 'Course List'
  newCourseTitle = ''
  courses = [
    
  ]

  createCourse = (title) => {
    this.courses.push({_id:'321', title});
  }

  deleteCourse = (courseToDelete) => {
    this.courses = this.courses.filter(course => course !== courseToDelete)
  }

  constructor(private service: CourseServiceClient) { }

  ngOnInit(): void { // a life-cycle function which gets called when this component is rendered. equals component did mount
    this.service.findAllCourses()
    .then(courses => this.courses = courses)
  }

}
