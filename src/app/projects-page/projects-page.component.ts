import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})


export class ProjectsPageComponent implements OnInit {
 
  data: Project[] = [
    {
      title: "Elzero Dashboard",
      date: new Date(15/6/2022),
      info: "Elzero Dashboard Project Design And Programming And Hosting",
      images: ["01.png", "02.png", "03.png", "04.png", "05.png"],
      tags: ["Programming", "Design", "Hosting", "Marketing"],
      percent: "50%",
      price: 2500
    },
    {
      title: "Academy Portal",
      date: new Date(15/10/2021),
      info: "Academy Portal Project Design And Programming",
      images: ["01.png", "02.png", "03.png"],
      tags: ["Programming", "Design"],
      percent: "80%",
      price: 1800
    },
    {
      title: "Chatting Application",
      date: new Date(15/10/2021),
      info: "Chatting Application Project Design",
      images: ["01.png", "02.png", "03.png"],
      tags: ["Design"],
      percent: "100%",
      price: 950
    },
    {
      title: "Ahmed Portal",
      date: new Date(15/6/2022),
      info: "Ahmed Portal Project Design And Programming",
      images: ["01.png", "02.png", "03.png"],
      tags: ["Programming", "Design", "Hosting", "Marketing"],
      percent: "70%",
      price: 850
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
