import { Component, OnInit } from '@angular/core';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

const MIN_NUMBER_OF_WORDS = 0;
const DEFAULT_NUMBER_OF_WORDS = 20;
const MAX_NUMBER_OF_WORDS = 100;

@Component({
  selector: 'app-word-count-selector',
  templateUrl: './word-count-selector.component.html',
  styleUrls: ['./word-count-selector.component.scss'],
})
export class WordCountSelectorComponent implements OnInit {
  minNumberOfWords = MIN_NUMBER_OF_WORDS;
  maxNumberOfWords = MAX_NUMBER_OF_WORDS;
  numberOfWords: number = DEFAULT_NUMBER_OF_WORDS;

  constructor(private wordsSelector: WordsSelectorService) {}

  generateWords() {
    this.wordsSelector.generateWords(this.numberOfWords);
  }

  ngOnInit(): void {}
}
