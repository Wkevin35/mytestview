import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestViewComponent } from './test-view.component';

@NgModule({
  declarations: [TestViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TestViewComponent
  ]
})
export class TestViewModule { }
