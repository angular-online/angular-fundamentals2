import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template-url',
  templateUrl: './display-data-in-template-url.component.html',
  styleUrls: ['./display-data-in-template-url.component.css']
})
export class DisplayDataInTemplateUrlComponent implements OnInit {

  private title: string;
  myHero: string;
  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { 
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }

  ngOnInit(): void {
    let age = 20;    
  }

}
