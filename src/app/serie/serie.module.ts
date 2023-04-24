import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './serie-list/serie-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeriesListComponent],
  exports: [SeriesListComponent]
})
export class SerieModule { }
