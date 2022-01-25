import { Component, OnInit } from '@angular/core';
import { WordGuess, WordTarget } from '@app/components/word.interface';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.scss'],
})
export class WordsListComponent implements OnInit {
    score: number = 0;
    graded: boolean = false;
    wordsGuessed: Map<WordTarget, string> = new Map();
    currentShownWordIndex: number = 0;
    areAllWordsShown: boolean = true;


    constructor(private wordsSelector: WordsSelectorService) {
        this.wordsSelector.$newWordsGenerated.subscribe(() => {
            this.reset();
        });
    }

    reset() {
        this.graded = false;
        this.wordsGuessed = new Map();
        this.currentShownWordIndex = 0;
        this.areAllWordsShown = true;
    }

    get words(): WordTarget[] {
        return this.wordsSelector.selectedWords;
    }

    ngOnInit(): void {
        for (const word of this.words) {
            this.wordsGuessed.set(word, '');
        }
    }

    correctWords() {
        this.score = 0;
        this.wordsGuessed.forEach((guess, word) => {
            if (word.targetWord.toLowerCase() === guess.toLowerCase()) {
                this.score++;
            }
        });
        this.graded = true;
        this.areAllWordsShown = true;
    }

    updateGuess(word: WordTarget, newGuess: WordGuess) {
        if (this.graded) {
            return;
        }
        this.wordsGuessed.set(word, newGuess.guessedWord);
    }

    isWordShown(wordIndex: number) {
        if (this.areAllWordsShown) {
            return true;
        }
        return this.currentShownWordIndex === wordIndex;
    }

    goLeft() {
        if (this.currentShownWordIndex === 0) {
            return;
        }
        this.currentShownWordIndex--;
    }

    goRight() {
        if (this.currentShownWordIndex === this.words.length) {
            return;
        }
        this.currentShownWordIndex++;
    }

}
