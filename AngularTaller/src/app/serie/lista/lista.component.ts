import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  avg: String = "0";
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getAvg() {
    let sum = 0;
    this.series.forEach(serie => {
      sum += serie.seasons;
    });
    this.avg = (sum / this.series.length).toFixed(2);
  }

  ngOnInit() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.getAvg();
    });
    
  }

}
