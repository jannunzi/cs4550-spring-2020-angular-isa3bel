import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor() { }
  
  modules = [
    {_id: '123', title: 'Module 1'},
    {_id: '234', title: 'Module 2'},
    {_id: '345', title: 'Module 3'},

  ]

  ngOnInit(): void {
  }

}
