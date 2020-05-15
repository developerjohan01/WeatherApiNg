export class ForecastMain {
    temp: number;
    tempFeelsLike: number;
    tempMin: number;
    tempMax: number;

    static createInstance(jsonForecastMain: any): ForecastMain {
        const object  = new ForecastMain()
        object.temp = jsonForecastMain.temp;
        object.tempFeelsLike = jsonForecastMain.feels_like;
        object.tempMin = jsonForecastMain.temp_min;
        object.tempMax = jsonForecastMain.temp_max;
        return object;
    }
}
