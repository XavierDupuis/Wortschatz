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

    set selectedThemes(newSelectedThemes: Set<string>) {
        this.wordsSelector.selectedThemes = newSelectedThemes;
    }

    ngOnInit(): void {}

    toggleAllThemesStatus() {
        if (this.areAllThemesSelected()) {
            this.selectedThemes = new Set();
            return;
        }
        this.selectedThemes = new Set(this.themes);
    }

    areAllThemesSelected() {
        return this.selectedThemes.size === this.themes.length;
    }

    areSomeStatusActive() {
        return this.selectedThemes.size > 0 && this.selectedThemes.size < this.themes.length;
    }

    changeThemeStatus(theme: string) {
        if (this.isThemeActive(theme)) {
            this.selectedThemes.delete(theme);
            return;
        }
        this.selectedThemes.add(theme);
    }

    isThemeActive(theme: string) {
        return this.selectedThemes.has(theme);
    }
}
