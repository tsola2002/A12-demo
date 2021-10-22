import { TestBed } from '@angular/core/testing';

import { SHAEncryptDecryptService } from './shaencrypt-decrypt.service';

describe('SHAEncryptDecryptService', () => {
  let service: SHAEncryptDecryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SHAEncryptDecryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
