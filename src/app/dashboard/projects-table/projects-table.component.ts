import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/employees';



@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})

export class ProjectsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees: Employees[] = [
    { name: "Ministry Wikipedia", finishDate: "10 May 2022", client: "Ministry", price: "$5300", status: "Pending" },
    { name: "Elzero Shop", finishDate: "12 Oct 2021", client: "Elzero Company", price: "$1500", status: "In Progress" },
    { name: "Bouba App", finishDate: "105 Sep 2021", client: "Bouba", price: "$800", status: "Completed" },
    { name: "Mahmoud Website", finishDate: "22 May 2021	", client: "Mahmoud", price: "$600", status: "Completed" },
    { name: "Sayed Website", finishDate: "	24 May 2021", client: "Sayed", price: "	$300", status: "Rejected" },
    { name: "Arena Application", finishDate: "01 Mar 2021", client: "	Arena Company", price: "$2600", status: "Completed" },
  ]

}

//				 	
/*
<tr>
      <img src="imgs/team-01.png" alt="" />
      <img src="imgs/team-02.png" alt="" />
      <img src="imgs/team-03.png" alt="" />
      <img src="imgs/team-05.png" alt="" />
    <span class="label btn-shape bg-orange c-white">Pending</span>
    
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