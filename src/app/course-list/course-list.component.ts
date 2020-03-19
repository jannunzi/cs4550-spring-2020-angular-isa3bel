import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = 'Course List Component'
  newCourseTitle = ''
  courses = [
    {_id: '123', title: 'Course A'},
    {_id: '234', title: 'Course B'},
    {_id: '345', title: 'Course C'},
    {_id: '456', title: 'Course D'},
  ]

  createCourse = (title) => {
    this.courses.push({_id:'321', title});
  }

  deleteCourse = (courseToDelete) => {
    this.courses = this.courses.filter(course => course !== courseToDelete)
  }

  constructor() { }

  ngOnInit(): void { // a life-cycle function which gets called when this component is rendered. equals component did mount
    fetch('https:wbdv-generic-server.herokuapp.com/api/isabelbolger/courses')
    .then(response => response.json())
    .then(courses => this.courses = courses)
  }

}
