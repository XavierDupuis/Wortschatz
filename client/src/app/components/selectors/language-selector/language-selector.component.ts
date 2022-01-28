import { Component, Input, OnInit } from '@angular/core';
import { Language } from '@app/components/selectors/language-selector/languages';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
    @Input() currentTheme: string;
    languages = Object.values(Language);

    set originLanguage(newLanguage: Language) {
        this.wordsSelector.originLanguage = newLanguage;
        this.wordsSelector.reset();
    }

    set targetLanguage(newLanguage: Language) {
        this.wordsSelector.targetLanguage = newLanguage;
        this.wordsSelector.reset();
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
