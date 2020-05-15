import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiHelperService} from "./api-helper.service";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import {Forecast} from "../models/forecast";
import {tap} from "rxjs/operators";
import {City} from "../models/city";

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    forecastListSubject = new BehaviorSubject<Forecast[]>([])
    citySubject = new Subject<City>()

    constructor(public http: HttpClient,
                private apiHelperService: ApiHelperService) {
    }

    getForecastListObservable(): Observable<Forecast[]> {
        return this.forecastListSubject.asObservable();
    }

    getCityObservable() {
        return this.citySubject.asObservable();
    }

    fetchForecast(city: string, latitude: number, longitude: number): void {
        this.http.get<any>(
            this.buildUrl(city, latitude, longitude)
        ).pipe(tap( response => {
            let city = new City();
            city.name = (response['city'])['name'];
            city.latitude = response['city']['coord']['lat']
            city.longitude = response['city']['coord']['lon']
            this.citySubject.next(city);
        }), tap(response => {
            let forecastList = this.extractForecastArray(response['list'])
            this.forecastListSubject.next(forecastList);
        })).subscribe()
    }

    private extractForecastArray(jsonElement: [string]): Forecast[] {
        const list: Forecast[] = []
        jsonElement.forEach(element => {
            list.push(Forecast.createInstance(element))
        })
        return list;
    }

    private buildUrl(city: string, latitude: number, longitude: number): string {
        let locationParameters = ''
        if (latitude && longitude) {
            locationParameters = `lon=${longitude}&lat=${latitude}`;
        } else if (city) {
            locationParameters = `q=${encodeURIComponent(city)}`;
        } else {
            // default to cape town
            locationParameters = `lon=18.42&lat=-33.93`;
        }
        const baseUrl = this.apiHelperService.getBaseUrl();
        return `${baseUrl}${locationParameters}&units=metric&appid=${this.apiHelperService.getApiKey()}`
    }


}
