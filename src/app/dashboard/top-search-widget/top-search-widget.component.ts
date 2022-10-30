import { Component, OnInit } from '@angular/core';
import { TopSearch } from "../../interfaces/top-search";

@Component({
  selector: 'app-top-search-widget',
  templateUrl: './top-search-widget.component.html',
  styleUrls: ['./top-search-widget.component.scss']
})
export class TopSearchWidgetComponent implements OnInit {

  constructor() { }

  topSearch: TopSearch[] = [
    {
      keyWord: "Programming",
      count: 220
    },
    {
      keyWord: "JavaScript",
      count: 180
    },
    {
      keyWord: "PHP",
      count: 160
    },
    {
      keyWord: "Code",
      count: 145
    },
    {
      keyWord: "Design",
      count: 110
    },
    {
      keyWord: "Logic",
      count: 95
    },
  ]
  ngOnInit(): void {
  }

}
