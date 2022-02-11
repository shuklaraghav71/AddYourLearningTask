import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningComponent } from './mycomponent/learning/learning.component';
import { LearningItemsComponent } from './mycomponent/learning-items/learning-items.component';
import { AddLearningComponent } from './mycomponent/add-learning/add-learning.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    LearningItemsComponent,
    AddLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
