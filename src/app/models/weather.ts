import {ForecastMain} from "./forecast-main";

export class Weather {
    main: string;
    description: string;
    icon: string;

    static createInstance(jsonWeather: any): Weather {
        const object  = new Weather()
        object.main = jsonWeather[0].main;
        object.description = jsonWeather[0].description;
        object.icon = jsonWeather[0].icon;
        return object;
    }
}
