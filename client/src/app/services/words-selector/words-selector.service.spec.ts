import { TestBed } from '@angular/core/testing';

import { WordsSelectorService } from './words-selector.service';

describe('WordsSelectorService', () => {
    let service: WordsSelectorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WordsSelectorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
