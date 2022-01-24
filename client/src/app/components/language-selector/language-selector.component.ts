import { Component, OnInit } from '@angular/core';
import { Language } from '@app/components/language-selector/languages';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
    languages = Object.values(Language);

    set originLanguage(newLaguage: Language) {
        this.wordsSelector.originLanguage = newLaguage;
    }

    set targetLanguage(newLaguage: Language) {
        this.wordsSelector.targetLanguage = newLaguage;
    }

    get originLanguage() {
        return this.wordsSelector.originLanguage;
    }

    get targetLanguage() {
        return this.wordsSelector.targetLanguage;
    }

    constructor(private wordsSelector: WordsSelectorService) {}

    ngOnInit(): void {}
}
