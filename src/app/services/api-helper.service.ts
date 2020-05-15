import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  constructor() { }

    getBaseUrl() {
        return "https://api.openweathermap.org/data/2.5/forecast?"
    }

    getApiKey() {
      return "95e2e94ea24ac96e4906922370157046"
    }
}
