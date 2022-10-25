import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/interfaces/employees';



@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})

export class ProjectsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Date.now;
  }

  path: string = "./assets/images/";

  employees: Employees[] = [
    { name: "Ministry Wikipedia", finishDate: new Date(2022, 10, 1), client: "Ministry", price: "$5300", teams: ["team-01.png", "team-02.png", "team-03.png", "team-05.png"], status: "Pending" },
    { name: "Elzero Shop", finishDate: new Date(2022, 10, 4), client: "Elzero Company", price: "$1500", teams: ['team-01.png', 'team-02.png'], status: "In Progress" },
    { name: "Bouba App", finishDate: new Date(2022, 10, 1), client: "Bouba", price: "$800", teams: ['team-01.png', 'team-02.png'], status: "Completed" },
    { name: "Mahmoud Website", finishDate: new Date(2022, 10, 6), client: "Mahmoud", price: "$600", teams: ['team-01.png', 'team-02.png'], status: "Completed" },
    { name: "Sayed Website", finishDate: new Date(2022, 10, 7), client: "Sayed", price: "	$300", teams: ['team-01.png', 'team-02.png'], status: "Rejected" },
    { name: "Arena Application", finishDate: new Date(2022, 10, 8), client: "	Arena Company", price: "$2600", teams: ['team-01.png', 'team-02.png'], status: "Completed" },
  ]
}

/*
<tr>
      <img src="imgs/team-01.png" alt="" />
      <img src="imgs/team-02.png" alt="" />
      <img src="imgs/team-03.png" alt="" />
      <img src="imgs/team-05.png" alt="" />
    <span class="label btn-shape bg-orange ">Pending</span>
    
    <img src="imgs/team-01.png" alt="" />
    <img src="imgs/team-02.png" alt="" />
    <img src="imgs/team-05.png" alt="" />
<td><span class="label btn-shape bg-blue c-white">In Progress</span></td>

    <img src="imgs/team-02.png" alt="" />
    <img src="imgs/team-03.png" alt="" />
<td><span class="label btn-shape bg-green c-white">Completed</span></td>
    <img src="imgs/team-01.png" alt="" />
    <img src="imgs/team-02.png" alt="" />
<td><span class="label btn-shape bg-green c-white">Completed</span></td>

<img src="imgs/team-01.png" alt="" />
    <img src="imgs/team-03.png" alt="" />
<td><span class="label btn-shape bg-red c-white">Rejected</span></td>

<img src="imgs/team-01.png" alt="" />
    <img src="imgs/team-02.png" alt="" />
    <img src="imgs/team-03.png" alt="" />
    <img src="imgs/team-04.png" alt="" />
<td><span class="label btn-shape bg-green c-white">Completed</span></td>
*/