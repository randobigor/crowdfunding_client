import { TestBed } from '@angular/core/testing';

import { PictureToBase64ConverterService } from './picture-to-base64-converter.service';

describe('PictureToBase64ConverterService', () => {
  let service: PictureToBase64ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureToBase64ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
