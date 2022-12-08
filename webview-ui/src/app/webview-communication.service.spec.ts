import { TestBed } from '@angular/core/testing';

import { WebviewCommunicationService } from './webview-communication.service';

describe('WebviewCommunicationService', () => {
  let service: WebviewCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebviewCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
