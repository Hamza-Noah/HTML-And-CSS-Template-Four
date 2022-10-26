import { Component, OnInit } from '@angular/core';
import {LatestNews} from "../../interfaces/latest-news"



@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
