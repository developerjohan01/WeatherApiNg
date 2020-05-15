import { TestBed } from '@angular/core/testing';

import { ApiHelperService } from './api-helper.service';

describe('ApiHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHelperService = TestBed.get(ApiHelperService);
    expect(service).toBeTruthy();
  });

  it('should return an api key with the correct length', () => {
    const service: ApiHelperService = TestBed.get(ApiHelperService);
    expect(service.getApiKey()).toBeDefined();
    expect(service.getApiKey().length).toBe(32);
  })

  it('should return a base url', () => {
    const service: ApiHelperService = TestBed.get(ApiHelperService);
    expect(service.getBaseUrl()).toBeDefined();
    expect(service.getBaseUrl()).toContain('https://')
    expect(service.getBaseUrl()).toContain('api.openweathermap.org')
  })

});
