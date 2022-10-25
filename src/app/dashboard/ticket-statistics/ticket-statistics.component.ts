import { Component, OnInit } from '@angular/core';
import { Statistic } from 'src/app/interfaces/statistic';


@Component({
  selector: 'app-ticket-statistics',
  templateUrl: './ticket-statistics.component.html',
  styleUrls: ['./ticket-statistics.component.scss']
})
export class TweetStatisticsComponent implements OnInit {

  stats: Statistic[] = [
    {
      icon: "fa-regular fa-rectangle-list c-orange",
      num: 2500,
      status: "Total"
    },
    {
      icon: "fa-solid fa-spinner c-blue",
      num: 500,
      status: "Pending"
    },
    {
      icon: "fa-regular fa-circle-check c-green",
      num: 1900,
      status: "Closed"
    },
    {
      icon: "fa-regular fa-rectangle-xmark c-red",
      num: 100,
      status: "Deleted"
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
