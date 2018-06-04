import { TestBed, inject } from '@angular/core/testing';

import { TwitterClientService } from './twitter-client.service';

describe('TwitterClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterClientService]
    });
  });

  it('should ...', inject([TwitterClientService], (service: TwitterClientService) => {
    expect(service).toBeTruthy();
  }));
});
