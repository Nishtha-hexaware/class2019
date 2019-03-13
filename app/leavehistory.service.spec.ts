import { TestBed, inject } from '@angular/core/testing';

import { LeavehistoryService } from './leavehistory.service';

describe('LeavehistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeavehistoryService]
    });
  });

  it('should be created', inject([LeavehistoryService], (service: LeavehistoryService) => {
    expect(service).toBeTruthy();
  }));
});
