import { TestBed } from '@angular/core/testing';

import { NgxCombogridLibraryService } from './ngx-combogrid-library.service';

describe('NgxCombogridLibraryService', () => {
  let service: NgxCombogridLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCombogridLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
