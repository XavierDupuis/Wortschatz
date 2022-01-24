import { Injectable } from '@angular/core';
import { Language } from '@app/components/selectors/language-selector/languages';
import { WordTarget } from '@app/components/word.interface';
import { Word, words } from '@app/services/words-selector/words';
import { getRandomInt } from '@app/utils';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root',
})
export class WordsSelectorService {
    originLanguage: Language = Language.Fr;
    targetLanguage: Language = Language.De;
    selectedWords: WordTarget[] = [];
    availableWordsIndex: number[] = [];

    newWordsGeneratedSubject = new Subject();
    get $newWordsGenerated() {
        return this.newWordsGeneratedSubject.asObservable();
    }

    // constructor() {
    //     this.init();
    // }

    init() {
        this.selectedWords = [];
        this.availableWordsIndex = [];
        for (let i = 0; i < words.length; i++) {
            this.availableWordsIndex.push(i);
        }
    }

    generateWords(numberOfWords: number) {
        this.init();
        const numberOfWordsToGenerate = Math.min(words.length, numberOfWords);
        for (let i = 0; i < numberOfWordsToGenerate; i++) {
            const randomIndex = getRandomInt(this.availableWordsIndex.length);
            const chosenIndex = this.availableWordsIndex[randomIndex];
            this.availableWordsIndex.splice(randomIndex, 1);
            const chosenWord = words[chosenIndex];
            const originalWord = this.getWordFromLanguage(this.originLanguage, chosenWord);
            const targetWord = this.getWordFromLanguage(this.targetLanguage, chosenWord);

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
