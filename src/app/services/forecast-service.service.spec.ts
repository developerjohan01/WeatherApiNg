import { TestBed } from '@angular/core/testing';

import { ForecastService } from './forecast.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ApiHelperService} from "./api-helper.service";

describe('ForecastService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ApiHelperService]
  }));

  it('should be created', () => {
    const service: ForecastService = TestBed.get(ForecastService);
    expect(service).toBeTruthy();
  });

  it('should build the lat long', () => {
    const service: ForecastService = TestBed.get(ForecastService);
    expect(service).toBeTruthy();
    // @ts-ignore this is private but I want to test this
    const url = service.buildUrl(null, 1.1,2.2);
    expect(url).toContain('lon=2.2&lat=1.1');
  });

  it('should build the URL default', () => {
    const service: ForecastService = TestBed.get(ForecastService);
    expect(service).toBeTruthy();
    // @ts-ignore this is private but I want to test the default
    const url = service.buildUrl(null, null,null);
    expect(url).toContain('lon=18.42&lat=-33.93');
  });

  it('should build the URL city', () => {
    const service: ForecastService = TestBed.get(ForecastService);
    expect(service).toBeTruthy();
    // @ts-ignore this is private but I want to test this
    const url = service.buildUrl('Cape Town', 0.0, 0.0);
    expect(url).toContain('q=Cape%20Town');
  });

});
