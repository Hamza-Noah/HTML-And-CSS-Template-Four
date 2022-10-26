import { Component, OnInit } from '@angular/core';
import { LatestNews } from "../../interfaces/latest-news"



@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  src: string = "assets/images/news-"
  info: LatestNews[] = [
    { image: "01.png", title: "Created SASS Section", info: "New SASS Examples & Tutorials", period: "3" },
    { image: "02.png", title: "Changed The Design", info: "A Brand New Website Design", period: "5" },
    { image: "03.png", title: "Team Increased", info: "3 Developers Joined The Team", period: "7" },
    { image: "04.png", title: "Added Payment Gateway", info: "Many New Payment Gateways Added", period: "9" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
