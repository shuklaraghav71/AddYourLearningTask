import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Learning } from 'src/app/learning';


@Component({
  selector: 'app-learning-items',
  templateUrl: './learning-items.component.html',
  styleUrls: ['./learning-items.component.css']
})
export class LearningItemsComponent implements OnInit {
  @Input()
  learning!: Learning;
  @Output() learningDelete: EventEmitter<Learning> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(learning: Learning) {
    this.learningDelete.emit(learning);
    console.log("onClick has been triggerd")
  }
}
