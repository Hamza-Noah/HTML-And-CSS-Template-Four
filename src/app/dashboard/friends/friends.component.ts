import { Component, OnInit } from '@angular/core';
import { Friend } from "../../interfaces/friend";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  imgSrc: string = "assets/images/"

  friends: Friend[] = [
    {
      avatar: "friend-01.jpg",
      name: "Ahmed Nasser",
      profession: "JavaScript Developer",
      friends: 99,
      project: 15,
      articles: 25,
      Joined: new Date(2021, 2, 10)
    },
    {
      avatar: "friend-02.jpg",
      name: "Omar Fathy",
      profession: "Cloud Developer",
      friends: 30,
      project: 11,
      articles: 12,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-03.jpg",
      name: "Omar Ahmed",
      profession: "Mobile Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-04.jpg",
      name: "Shady Nabil",
      profession: "Back-End Developer",
      friends: 70,
      project: 30,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-05.jpg",
      name: "Mohamed Ibrahim",
      profession: "Algorithm Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-02.jpg",
      name: "Amr Hendawy",
      profession: "Back-End Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-01.jpg",
      name: "Mahmoud Adel",
      profession: "Cloud Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-04.jpg",
      name: "Ahmed Abuzaid",
      profession: "Content Creator",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-03.jpg",
      name: "Gareeb Elshiekh",
      profession: "JavaScript Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      avatar: "friend-02.jpg",
      name: "Hamza Noah",
      profession: "Front-End Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


