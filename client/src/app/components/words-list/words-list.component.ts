import { Component, OnInit } from '@angular/core';
import { Word } from '@app/components/word-card/word.interface';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.scss'],
})
export class WordsListComponent implements OnInit {
    score: number | undefined;
    wordsGuessed: Map<Word, string> = new Map();
    guessedWordParent: string = 'None';
    constructor(private wordSelector: WordsSelectorService) {}

    getGuessedWord(word: Word): string {
        const guess = this.wordsGuessed.get(word);
        if (!guess) {
            return 'NULL';
        }
        return guess;
    }

    get words(): Word[] {
        return this.wordSelector.words;
    }

    correctWords() {
        console.log(this.wordsGuessed);
        this.score = 0;
        this.wordsGuessed.forEach((guess, word) => {
            if (word.targetWord === guess) {
                // this.score++;
            }
            guess = '';
        });
        this.guessedWordParent = '';
    }

    updateGuess(word: Word, newGuess: string) {
        console.log('update ' + word.originalWord + ' with ' + newGuess);
        this.wordsGuessed.set(word, newGuess);
    }

    ngOnInit(): void {}
}
