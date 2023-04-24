import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SeriesListComponent implements OnInit {

  public series: Array<Serie> = [];

  public average: number = 0;

  constructor(private servicio: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries():void {
    this.servicio.getSeries().subscribe((series => {
      this.series = series
      this.average = this.updateAverage();
    }));
  }

  updateAverage(): number{
    let numSeasons: number = 0;
    this.series.forEach((serie) => numSeasons+= serie.seasons);
    let average: number = numSeasons/this.series.length;
    return average;
  }

}
