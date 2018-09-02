import { TestBed, inject } from '@angular/core/testing';

import { TmdbApiService } from './tmdb-api.service';

describe('TmdbApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbApiService]
    });
  });

  it('should be created', inject([TmdbApiService], (service: TmdbApiService) => {
    expect(service).toBeTruthy();
  }));
});
