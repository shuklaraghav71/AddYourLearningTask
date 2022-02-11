import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Learning } from 'src/app/learning';

@Component({
  selector: 'app-add-learning',
  templateUrl: './add-learning.component.html',
  styleUrls: ['./add-learning.component.css']
})
export class AddLearningComponent implements OnInit {
  title!: string;
  dacas!: string;
 @Output() learningadd: EventEmitter<Learning> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(){
    const learning = {
      Sno:8,
      title: this.title,
      decas: this.dacas,
      active:true,
    }
    this.learningadd.emit(learning);
  }
}
