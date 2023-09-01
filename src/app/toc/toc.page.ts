import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1: An Unexpected Party",
      url: "/chapter1",
    },
    {
      title: "Chapter 10: A Warm Welcome",
      url: "/chapter10",

    },
    {
      title: "Chapter 19: The Last Stage",
      url: "/chapter19",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
