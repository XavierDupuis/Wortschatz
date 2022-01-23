import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-word-card',
    templateUrl: './word-card.component.html',
    styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent {
    @Input() word!: string;
    @Input() guessedWord: string = '';
    @Output() guessedWordChange = new EventEmitter<string>();
}
