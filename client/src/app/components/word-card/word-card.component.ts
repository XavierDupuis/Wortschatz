import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WordGuess } from '@app/components/word.interface';

@Component({
    selector: 'app-word-card',
    templateUrl: './word-card.component.html',
    styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent {
    @Input() originalWord!: string;
    @Input() guessedWord!: string;
    @Input() targetWord: string;
    @Output() guessedWordChange = new EventEmitter<WordGuess>();

    sendGuess() {
        const wordGuess: WordGuess = { originalWord: this.originalWord, guessedWord: this.guessedWord };
        this.guessedWordChange.emit(wordGuess);
    }

    isGraded(): boolean {
        return this.targetWord.length !== 0;
    }

    isGuessCorrect(): boolean {
        return this.targetWord.toLowerCase() === this.guessedWord.toLowerCase();
    }

    getClassName(): string {
        if (!this.isGraded()) {
            return '';
        }
        if (this.isGuessCorrect()) {
            return 'correct';
        }
        return 'incorrect';
    }
}
