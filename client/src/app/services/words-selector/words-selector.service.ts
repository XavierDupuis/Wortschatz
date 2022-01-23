import { Injectable } from '@angular/core';
import { Word } from '@app/components/word-card/word.interface';

@Injectable({
    providedIn: 'root',
})
export class WordsSelectorService {
    words: Word[] = [
        { originalWord: 'a', targetWord: 'A' },
        { originalWord: 'b', targetWord: 'B' },
        { originalWord: 'c', targetWord: 'C' },
    ];
    constructor() {}
}
