import { Component, OnInit } from '@angular/core';
import { Word, WordGuess } from '@app/components/word-card/word.interface';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.scss'],
})
export class WordsListComponent implements OnInit {
    score: number = 0;
    graded: boolean = false;
    wordsGuessed: Map<Word, string> = new Map();
    constructor(private wordSelector: WordsSelectorService) {}

    ngOnInit(): void {
        for (const word of this.words) {
            this.wordsGuessed.set(word, '');
        }
    }

    get words(): Word[] {
        return this.wordSelector.words;
    }

    correctWords() {
        this.score = 0;
        this.wordsGuessed.forEach((guess, word) => {
            if (word.targetWord === guess) {
                this.score++;
            }
        });
        this.graded = true;
    }

    updateGuess(newGuess: WordGuess) {
        if (this.graded) {
            return;
        }
        for (const [word] of this.wordsGuessed) {
            if (word.originalWord === newGuess.originalWord) {
                this.wordsGuessed.set(word, newGuess.guessedWord);
                return;
            }
        }
    }
}
