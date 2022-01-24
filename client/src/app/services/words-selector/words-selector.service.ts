import { Injectable } from '@angular/core';
import { Language } from '@app/components/language-selector/languages';
import { WordTarget } from '@app/components/word.interface';
import { Word, words } from '@app/services/words-selector/words';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root',
})
export class WordsSelectorService {
    originLanguage: Language = Language.Fr;
    targetLanguage: Language = Language.De;
    selectedWords: WordTarget[] = [];

    newWordsGeneratedSubject = new Subject();
    get $newWordsGenerated() {
        return this.newWordsGeneratedSubject.asObservable();
    }

    constructor() {
        // this.generateWords();
    }

    generateWords() {
        this.selectedWords = [];
        for (const word of words) {
            const originalWord = this.getWordFromLanguage(this.originLanguage, word);
            const targetWord = this.getWordFromLanguage(this.targetLanguage, word);
            this.selectedWords.push({ originalWord, targetWord });
        }
        this.newWordsGeneratedSubject.next();
    }

    private getWordFromLanguage(language: Language, word: Word): string {
        switch (language) {
            case Language.Fr:
                return word.fr;
            case Language.En:
                return word.en;
            case Language.De:
                return word.de;
            default:
                throw Error('Language ' + language + ' not supported');
        }
    }
}
