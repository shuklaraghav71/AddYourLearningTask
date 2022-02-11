import { Component, OnInit } from '@angular/core';
import { Learning } from '../../learning';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  learning: Learning[];

  constructor() {

    this.learning = [

      {
        Sno: 1,
        title: "title1",
        decas: "description",
        active:true },


      {
        Sno: 2,
        title: "title2",
        decas: "description",
        active:true
      },

      {
        Sno: 3,
        title: "title3",
        decas: "description",
        active:true
      },

    ]
  }

  ngOnInit(): void {
  }
  deleteLearning(learning: Learning) {
    console.log(learning);
    const index = this.learning.indexOf(learning);
    this.learning.splice(index, 1);
  }
  addlearning(learning: Learning) {
    console.log(learning);
    this.learning.push(learning);
  }
}
