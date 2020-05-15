import {Weather} from "./weather";
import {ForecastMain} from "./forecast-main";

export class Forecast {
    dt: number
    main: ForecastMain;
    weather: Weather;
    wind: any;
    dateText: string;

    static createInstance(jsonForecast: any): Forecast {
        const object  = new Forecast()
        object.dt = jsonForecast.dt;
        object.dateText = jsonForecast.dt_txt;
        object.weather = Weather.createInstance(jsonForecast.weather);
        object.main = ForecastMain.createInstance(jsonForecast.main)
        object.wind = jsonForecast.wind;
        return object;
    }
}
