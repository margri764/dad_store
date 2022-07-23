import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  arrayWood = [
    {
      img: "./assets/wood1.png",
    },
    {
      img: "./assets/wood2.png",
    },
    { 
      img: "./assets/wood3.png",
    },
    {
      img: "./assets/wood4.png",
    },
    {
      img: "./assets/wood5.png"
    },
  ]
}
