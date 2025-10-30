import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-content',
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  private words = ['service', 'security', 'invasion', ];
  currentWord = this.words[0];


  ngOnInit(): void {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % this.words.length;
      this.currentWord = this.words[index];
    }, 2000);
  }
}