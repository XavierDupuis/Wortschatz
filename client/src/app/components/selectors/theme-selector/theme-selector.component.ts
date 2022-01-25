import { Component, OnInit } from '@angular/core';
import { Theme } from '@app/components/selectors/theme-selector/themes';
import { WordsSelectorService } from '@app/services/words-selector/words-selector.service';

@Component({
    selector: 'app-theme-selector',
    templateUrl: './theme-selector.component.html',
    styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
    themes = Object.keys(Theme).filter((theme) => {
        return isNaN(Number(theme));
    });

    constructor(private wordsSelector: WordsSelectorService) {}

    get selectedThemes() {
        return this.wordsSelector.selectedThemes;
    }

    ngOnInit(): void {}

    changeThemeStatus(theme: string) {
        const isThemeActive = this.selectedThemes.has(theme);
        if (isThemeActive) {
            this.selectedThemes.delete(theme);
        } else {
            this.selectedThemes.add(theme);
        }
    }
}
