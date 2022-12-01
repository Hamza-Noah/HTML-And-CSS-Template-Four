import { Component, OnInit } from '@angular/core';
import { Friends } from "../../interfaces/friends";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends: Friends[] = [
    {
      name: "Ahmed Nasser",
      profession: "JavaScript Developer",
      friends: 99,
      project: 15,
      articles: 25,
      Joined: new Date(2021, 2, 10)
    },
    {
      name: "Omar Fathy",
      profession: "Cloud Developer",
      friends: 30,
      project: 11,
      articles: 12,
      Joined: new Date(2020, 2, 8)
    },
    {
      name: "Omar Ahmed",
      profession: "Mobile Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      name: "Shady Nabil",
      profession: "Back-End Developer",
      friends: 70,
      project: 30,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      name: "Mohamed Ibrahim",
      profession: "Algorithm Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      name: "Amr Hendawy",
      profession: "Back-End Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      name: "Mahmoud Adel",
      profession: "Cloud Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      name: "Ahmed Abuzaid",
      profession: "Content Creator",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
      name: "Gareeb Elshiekh",
      profession: "JavaScript Developer",
      friends: 80,
      project: 20,
      articles: 18,
      Joined: new Date(2020, 2, 8)
    },
    {
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


