import { Component, OnInit } from '@angular/core';
import { TasksWidget } from 'src/app/interfaces/tasks-widget';

@Component({
  selector: 'app-tasks-widget',
  templateUrl: './tasks-widget.component.html',
  styleUrls: ['./tasks-widget.component.scss']
})

export class TasksWidgetComponent implements OnInit {

  tasks: TasksWidget[] = [
    {
      taskTitle: "Record One New Video",
      taskInfo: "Record Python Create Exe Project",
    },
    {
      taskTitle: "Write Article",
      taskInfo: "Write Low Level vs High Level Languages",
    },
    {
      taskTitle: "Finish Project",
      taskInfo: "Publish Academy Programming Project",
    },
    {
      taskTitle: "Attend The Meeting",
      taskInfo: "Attend The Project Business Analysis Meeting",
      done: true
    },
    {
      taskTitle: "Finish Lesson",
      taskInfo: "Finish Teaching Flex Box",
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
