import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () => {
    return fetch('https:wbdv-generic-server.herokuapp.com/api/isabelbolger/courses')
    .then(response => response.json());
  }
}