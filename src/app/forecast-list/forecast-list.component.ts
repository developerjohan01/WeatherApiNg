import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ForecastService} from "../services/forecast.service";
import {Forecast} from "../models/forecast";
import {Observable} from "rxjs";

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {
  forecastObservable: Observable<Forecast[]>
  forecastList = new Array<Forecast>()

  constructor(private service: ForecastService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.forecastObservable = service.getForecastListObservable();
    this.forecastObservable.subscribe(result => this.forecastList = result);
  }

  ngOnInit(): void {
    this.getForecast()
  }

  private getForecast() {
    // console.log('getForecast')
    // let city = '';
    // let latitude = 0.0;
    // let longitude = 0.0;
    // if (this.cityName.valid) {
    //   city = this.cityName.value;
    // }
    // if (this.latitude.valid) {
    //   latitude = this.latitude.value;
    // }
    // if (this.longitude.valid) {
    //   longitude = this.longitude.value;
    // }
    this.service.fetchForecast("", 0.0, 0.0);
  }

}
