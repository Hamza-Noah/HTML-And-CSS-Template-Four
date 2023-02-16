import { Component, OnInit } from '@angular/core';
import { File } from '../interfaces/file';

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.scss']
})
export class FilesPageComponent implements OnInit {

  files: File[] = [
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "avi.svg",
      fileName: "my-file.avi",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "eps.svg",
      fileName: "my-file.eps",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "psd.svg",
      fileName: "my-file.psd",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "dll.svg",
      fileName: "my-file.dll",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "png.svg",
      fileName: "my-file.png",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "dll.svg",
      fileName: "my-file.dll",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "png.svg",
      fileName: "my-file.png",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "psd.svg",
      fileName: "my-file.psd",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "avi.svg",
      fileName: "my-file.avi",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "eps.svg",
      fileName: "my-file.eps",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "avi.svg",
      fileName: "my-file.avi",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
    {
      fileType: "pdf.svg",
      fileName: "my-file.pdf",
      date: new Date(2020, 6, 20),
      fileSize: "5.5",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
