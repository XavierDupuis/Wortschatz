import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordGuess, WordTarget } from '@app/components/word.interface';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

export enum Key {
    ArrowUp = 'ArrowUp',
    ArrowDown = 'ArrowDown',
    Enter = 'Enter',
}

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.scss'],
})
export class WordsListComponent implements OnInit {
    @Input() currentTheme: string;
    graded: boolean = false;
    wordsGuesses: Map<WordTarget, string> = new Map();
    currentShownWordIndex: number = 0;
    areAllWordsShown: boolean = false;

    get areArrowShown() {
        return this.words.length && !this.areAllWordsShown;
    }

    constructor(private wordsSelector: WordsSelectorService, private snackBar: MatSnackBar) {
        this.wordsSelector.$newWordsGenerated.subscribe(() => {
            this.reset();
        });
    }

    @HostListener('window:keydown', ['$event'])
    keyDown(event: KeyboardEvent) {
        switch (event.key) {
            case Key.ArrowUp:
                this.goPrevious();
                break;
            case Key.ArrowDown:
            case Key.Enter:
                this.goNext();
                break;
            default:
                break;
        }
    }

    reset() {
        this.graded = false;
        this.wordsGuesses = new Map();
        this.currentShownWordIndex = 0;
        this.areAllWordsShown = false;
    }

    get words(): WordTarget[] {
        return this.wordsSelector.selectedWords;
    }

    ngOnInit(): void {
        for (const word of this.words) {
            this.wordsGuesses.set(word, '');
        }
    }

    correctWords() {
        let score = 0;
        this.wordsGuesses.forEach((guess, word) => {
            if (word.targetWord.toLowerCase() === guess.toLowerCase()) {
                score++;
            }
        });
        this.graded = true;
        this.areAllWordsShown = true;
        const percentage = Math.round((score / this.words.length) * 100);
        this.openSnackBar(`You got ${percentage}%  !`, 'Close');
    }

    changeGuess(word: WordTarget, newGuess: WordGuess) {
        if (this.graded) {
            return;
        }
        this.wordsGuesses.set(word, newGuess.guessedWord);
    }

    getGuess(word: WordTarget) {
        const currentGuess = this.wordsGuesses.get(word);
        if (!currentGuess) {
            return '';
        }
        return currentGuess;
    }

    isWordShown(wordIndex: number) {
        if (this.areAllWordsShown) {
            return true;
        }
        return this.currentShownWordIndex === wordIndex;
    }

    canGrade() {
        return !this.graded && this.words.length;
    }

    canGoPrevious() {
        return this.currentShownWordIndex > 0 && !this.areAllWordsShown;
    }

    canGoNext() {
        return this.currentShownWordIndex < this.words.length - 1 && !this.areAllWordsShown;
    }

    goPrevious() {
        if (!this.canGoPrevious()) {
            return;
        }
        this.currentShownWordIndex--;
    }

    goNext() {
        if (!this.canGoNext()) {
            return;
        }
        this.currentShownWordIndex++;
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: this.currentTheme,
        });
    }
}
