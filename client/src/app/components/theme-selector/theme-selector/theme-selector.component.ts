import { Component, OnInit } from '@angular/core';
import { Theme } from '@app/components/theme-selector/theme-selector/themes';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

@Component({
    selector: 'app-theme-selector',
    templateUrl: './theme-selector.component.html',
    styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
    themes = Object.values(Theme);
    selectedTheme = [];
    constructor(private wordsSelector: WordsSelectorService) {}

    generateWords() {
        this.wordsSelector.generateWords();
    }

    ngOnInit(): void {}
}
