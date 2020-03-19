import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ModuleServiceClient } from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ModuleServiceClient) { }
  
  modules = [
    {_id: '123', title: 'Module 1'},
    {_id: '234', title: 'Module 2'},
    {_id: '345', title: 'Module 3'},
  ]
  courseId = ''
  moduleId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid
      this.courseId = params.id
    })
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/courses/${this.courseId}/modules`)
    .then(response => response.json())
    .then(modules => this.modules = modules);
  }

}
