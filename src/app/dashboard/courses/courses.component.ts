import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/interfaces/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  imageSource: string = "assets/images/";

  courses: Courses[] = [
    {
      cover: "course-01.jpg",
      image: "team-01.png",
      title: "Mastering Web Design",
      details: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      attendees: 950,
      price: 165
    },
    {
      cover: "course-02.jpg",
      image: "team-02.png",
      title: "Data Structure And Algorithms",
      details: "",
      attendees: 1150,
      price: 210
    },
    {
      cover: "course-03.jpg",
      image: "team-03.png",
      title: "Responsive Web Design",
      details: "",
      attendees: 1150,
      price: 210
    },
    {
      cover: "course-04.jpg",
      image: "team-04.png",
      title: "Mastering Python",
      details: "",
      attendees: 950,
      price: 250
    },
    {
      cover: "course-05.jpg",
      image: "team-05.png",
      title: "Mastering Python",
      details: "",
      attendees: 950,
      price: 250
    },
    {
      cover: "course-01.jpg",
      image: "team-01.png",
      title: "Mastering Web Design",
      details: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      attendees: 950,
      price: 165
    },
    {
      cover: "course-02.jpg",
      image: "team-02.png",
      title: "Data Structure And Algorithms",
      details: "",
      attendees: 1150,
      price: 210
    },
    {
      cover: "course-03.jpg",
      image: "team-03.png",
      title: "Responsive Web Design",
      details: "",
      attendees: 1150,
      price: 210
    },
    {
      cover: "course-04.jpg",
      image: "team-04.png",
      title: "Mastering Python",
      details: "",
      attendees: 950,
      price: 250
    },
    {
      cover: "course-05.jpg",
      image: "team-05.png",
      title: "Mastering Python",
      details: "",
      attendees: 950,
      price: 250
    },

  ]


  HelloTransGender(message: string){
    console.log(message)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
