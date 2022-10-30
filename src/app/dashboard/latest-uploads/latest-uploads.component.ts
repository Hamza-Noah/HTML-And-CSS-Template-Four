import { Component, OnInit } from '@angular/core';
import { LatestUploads } from "../../interfaces/latest-uploads"
@Component({
  selector: 'app-latest-uploads',
  templateUrl: './latest-uploads.component.html',
  styleUrls: ['./latest-uploads.component.scss']
})
export class LatestUploadsComponent implements OnInit {


  imgPath: string = "assets/images/";
  uploads: LatestUploads[] = [
    { imgSrc: "pdf.svg", title: "my-file.pdf", userName: "Elzero", size: 2.9 },
    { imgSrc: "avi.svg", title: "My-Video-File.avi", userName: "Elzero", size: 4.9 },
    { imgSrc: "psd.svg", title: "My-Psd-File.pdf", userName: "Admin", size: 4.5 },
    { imgSrc: "zip.svg", title: "My-Zip-File.pdf", userName: "Osama", size: 8.9 },
    { imgSrc: "dll.svg", title: "My-DLL-File.pdf", userName: "User", size: 4.9 },
    { imgSrc: "eps.svg", title: "my-Eps-file.pds", userName: "Designer", size: 8.9 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}