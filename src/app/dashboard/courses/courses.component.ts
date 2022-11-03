import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/interfaces/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  course: Courses[] = [
    {
      cover: "course-01.jpg",
      image: "team-01.png",
      title: "Mastering Web Design",
      details: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      attendees: 950,
      price: 165
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
